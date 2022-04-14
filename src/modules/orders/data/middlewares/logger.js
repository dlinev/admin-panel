export const logger = (store) => (next) => (type) => {
  console.warn(type);
  console.log("сейчас: ", store.getState());
  let result = next(type);
  console.log("будет:  ", store.getState());
  return result;
};
