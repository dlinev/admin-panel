export const logger = (store) => (next) => (action) => {
  console.warn(action);
  console.log("сейчас: ", store.getState());
  let result = next(action);
  console.log("будет:  ", store.getState());
  return result;
};