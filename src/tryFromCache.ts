/*
 * @Author: Sexy
 * @Date: 2019-12-18 18:18:30
 * @LastEditors: Sexy
 * @LastEditTime: 2019-12-18 18:24:08
 * @Description: file content
 */
import binCache from './binCache';
import fetchAsDataURL from './fetchAsDataURL';
const tryFromCache = (key: string) => {
  const value = binCache.get(key);
  if (value) {
    return value;
  } else {
    const fetchPromise = fetchAsDataURL(key).then(fetchRes => {
      return fetchRes.result;
    });
    binCache.set(key, fetchPromise);
    return fetchPromise;
  }
};

export default tryFromCache;
