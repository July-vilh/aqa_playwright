import moment from "moment";

const DATE_AND_TIME_FORMAT = "YYYY/MM/DD HH:mm:ss";
const DATE_FORMAT = "YYYY/MM/DD";

export function convertToDateAndTime(value: string) {
  return moment(value).format(DATE_AND_TIME_FORMAT);
}

/**
 *
 * @param {string} value
 * @returns yyyy/mm/dd
 */
export function convertToDate(value: string) {
  return moment(value).format(DATE_FORMAT);
}
