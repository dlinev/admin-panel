import lodash from "lodash";

const NUMBER = "NUMBER";
const DATE = "DATE";

export const sortBy = (list = [], fields = [], orders = []) => {
  return lodash.orderBy(list, fields, orders);
};

export const filterByDate = (value, dateFrom, dateTo) => {
  const rangeDate = isRange(dateFrom, dateTo, DATE);
  return rangeDate(value);
};

export const filterBySum = (value, sumFrom, sumTo) => {
  const rangeSum = isRange(sumFrom, sumTo, NUMBER);
  return rangeSum(value);
};

export const parseStringToDate = (dateString = "", separator = ".") => {
  if (dateString !== undefined) {
    const parts = dateString.substring(0, 10).split(separator);
    return new Date(parts[2], parts[1] - 1, parts[0]);
  } else return undefined;
};

export const isRange = (min, max, type) => (value) => {
  switch (type) {
    case NUMBER:
      const minNumber = min ? parseInt(min) : Number.MIN_SAFE_INTEGER;
      const maxNumber = max ? parseInt(max) : Number.MAX_SAFE_INTEGER;
      value = value === "-" ? 0 : parseInt(value);
      return value >= minNumber && value <= maxNumber;

    case DATE:
      const minDate = min ? parseStringToDate(min) : new Date("1900-01-01");
      const maxDate = max ? parseStringToDate(max) : new Date("9999-01-01");
      value = parseStringToDate(value);
      return value >= minDate && value <= maxDate;

    default:
      return true;
  }
};
