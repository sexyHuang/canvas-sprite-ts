/*
 * @Author: Sexy
 * @Date: 2019-12-18 17:04:07
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-18 17:31:46
 * @Description: file content
 */

interface FetchResolve {
  url: string;
  result?: FileReader['result'];
}

function fetchAsDataURL(url: string) {
  return new Promise<FetchResolve>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const fr = new FileReader();
      fr.onload = e => {
        resolve({ url, result: e.target?.result });
      };
      fr.onerror = () => {
        reject(Error(`read ${url} error`));
      };
      fr.readAsDataURL(xhr.response);
    };
    xhr.onerror = () => {
      reject(Error(`fetch ${url} error`));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', url);
    xhr.send();
  });
}

export default fetchAsDataURL;
