/*
 * @Author: Sexy
 * @Date: 2019-12-20 11:14:48
 * @LastEditors  : Sexy
 * @LastEditTime : 2019-12-20 11:35:04
 * @Description: file content
 */
import binCache from '@/binCache';
const TEST_KEY = 'test_object';
const TEST_KEY_1 = 'test_object_1';
const TEST_VALUE = {
  test: true
};
describe('缓存对象测试', () => {
  test('添加缓存测试', () => {
    expect(binCache.set(TEST_KEY, TEST_VALUE)).toEqual({
      key: TEST_KEY,
      value: TEST_VALUE
    });
  });
  test('读取缓存测试', () => {
    expect(binCache.get(TEST_KEY)).toEqual(TEST_VALUE);
  });
  test('删除缓存测试', () => {
    binCache.delete(TEST_KEY);
    expect(binCache.get(TEST_KEY)).toBeUndefined;
  });
  test('清空缓存测试', () => {
    binCache.set(TEST_KEY, TEST_VALUE);
    binCache.set(TEST_KEY_1, TEST_VALUE);
    binCache.clear();
    expect(binCache.get(TEST_KEY)).toBeUndefined;
    expect(binCache.get(TEST_KEY_1)).toBeUndefined;
  });
});
