const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
class Formatter {
  static formatDate(date: number | Date) {
    const today = new Date();
    const nextDay = new Date(date);
    const days = differenceInDays(nextDay, today);
    const hours = differenceInHours(nextDay, today);
    const minutes = differenceInMinutes(nextDay, today);
    const seconds = differenceInSeconds(nextDay, today);
    return [days, hours, minutes, seconds];
  }
  static formatCurrency(num: number) {
    const formatter = new Intl.NumberFormat("en-Us", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formatter.format(num);
  }
  static serializeDate(date: number | Date) {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const month = MONTHS[newDate.getMonth()];
    return `${day}/${month}`;
  }
}
export default Formatter;
