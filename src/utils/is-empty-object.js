export function isEmptyObject(obj) {
    // !! 用来转为boolean类型
  return !!Object.keys(obj).length;
}
