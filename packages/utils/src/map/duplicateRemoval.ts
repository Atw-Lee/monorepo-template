/**
 * @description: 字符串去重
 * @param {string} arr 字符串数组
 * @return {*} 字符串数组
 */
export function stringDeduplication(arr: string[]) {
  let set = new Set(arr);
  return [...set];
}
