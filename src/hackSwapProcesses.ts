/*
 * @Author: Sexy
 * @Date: 2019-12-17 09:50:50
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-25 16:20:43
 * @Description: file content
 */
const HACK_DIV_ID = '___HACK_SWAP_PROCESSES_DIV';
const stopFlagList: Array<boolean> = [];
const BASE_HACK_LIST = ['12', '13'];
const getIOSVersion = () => {
  let match = navigator.userAgent.match(/iPhone OS ([\d_]+)/);
  return match ? match[1].replace(/_/g, '.') : null;
};
let count = 0;
export default () => {
  if (!BASE_HACK_LIST.includes(getIOSVersion()?.split('.')[0] || ''))
    return () => {};

  let div = document.getElementById(HACK_DIV_ID);
  const idx = stopFlagList.length;
  if (!div) {
    div = document.createElement('div');
    div.id = HACK_DIV_ID;
    div.setAttribute(
      'style',
      `position:absolute;left:0;top:0;opacity:0;pointer-events:none;`
    );
    document.body.append(div);
  }

  const hack = () => {
    if (stopFlagList.every(val => val)) return;
    count = count ^ 1;
    div && (div.innerHTML = `${count}`);
    window.requestAnimationFrame(hack);
  };
  // window.addEventListener('pageshow', hack, false);
  if (!stopFlagList.some(val => !val)) {
    stopFlagList[idx] = false;
    hack();
  } else {
    stopFlagList[idx] = false;
  }

  return () => {
    stopFlagList[idx] = true;
  };
};
