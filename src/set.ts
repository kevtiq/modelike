// Sets the nested value based on tokenized string indicating the path of the
// object. (e.g. set(obj, "user.info.address", "myValue")
type Primitive = string | number | object | boolean;

export default function(obj: object, path: string, val: Primitive): object {
  if (!path || path === '') return obj;
  const tokens = path.split('.');

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const lastKey = tokens.pop()!;
  const newObj = tokens.reduce((o, k) => (o[k] = o[k] || {}), obj);
  newObj[lastKey] = val;

  return newObj;
}
