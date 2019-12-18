/*
 * @Author: Sexy
 * @Date: 2019-12-18 16:14:53
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-18 18:21:12
 * @Description: file content
 */
let cacheMap: {
  [key: string]: any;
} = {};

const binCache = {
  get: (key: string) => cacheMap[key],
  set: (key: string, value: any) => {
    cacheMap[key] = value;
    return { key, value };
  },
  delete: (key: string) => {
    delete cacheMap[key];
  },
  clear: () => {
    cacheMap = {};
  }
};

export default binCache;
