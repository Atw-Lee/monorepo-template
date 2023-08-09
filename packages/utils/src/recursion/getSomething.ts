/**
 * @description: 数级结构中，通过目标key，找到该对象在整个数中的路径
 * @param {string} targetKey 目标key
 * @param {any} data 数据源
 * @param {string} keyCode 数级结构唯一键，默认id
 * @param {string} childrenCode 数级结构子元素键名，默认children
 * @return {*}
 */
export function getPathByKey<T extends Record<string, any>>({
  targetKey,
  data,
  keyCode = "id",
  childrenCode = "children",
}: {
  targetKey: string;
  data: T[];
  keyCode?: string;
  childrenCode?: string;
}) {
  let result: T[] = [];
  const traverse = (targetKey: string, path: T[], data: T[]) => {
    if (data.length === 0) {
      return;
    }
    for (let item of data) {
      path.push(item);
      if (item[keyCode] === targetKey) {
        result = JSON.parse(JSON.stringify(path));
        return;
      }
      const children = Array.isArray(item[childrenCode])
        ? item[childrenCode]
        : [];
      traverse(targetKey, path, children);
      path.pop();
    }
  };
  traverse(targetKey, [], data);
  return result;
}
