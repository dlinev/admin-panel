import lodash from "lodash";

export const sortBy = (list = [], fields = [], orders = []) => {
  return lodash.orderBy(list, fields, orders);
};

export const filterByDate = (list = [], dateFrom = "", dateTo = "") => {
  return true;
};

export const getDate = (dateString) => {
  var date = new Date(dateString);
  var displayValue = "{0}.{1}.{2}"
    .replace("{0}", prefixZeroIfNeeded(date.getUTCDate()))
    .replace("{1}", prefixZeroIfNeeded(date.getUTCMonth() + 1))
    .replace("{2}", date.getUTCFullYear());

  return {
    sortKey: date.getTime(),
    displayValue: displayValue,
  };
};
const prefixZeroIfNeeded = (nr) => {
  return nr < 10 ? "0" + nr : "" + nr;
};

export const parseStringToDate = (dateString = "", separator = ".") => {
  if (dateString !== undefined) {
    const parts = dateString.substring(0, 10).split(separator);
    return new Date(parts[2], parts[1] - 1, parts[0]);
  } else return undefined;
};
