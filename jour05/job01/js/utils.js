export function asyncValidate(callback) {
  return new Promise(resolve => {
    setTimeout(() => resolve(callback()), 200);
  });
}