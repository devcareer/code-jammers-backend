export function filterValues(obj) {
  Object.keys(obj).forEach(key => (obj[key] === null
    || obj[key] === undefined
    || obj[key] === ""
    ? delete obj[key]
    : {}));
}
