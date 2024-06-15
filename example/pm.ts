import dayjs from "dayjs";
import isAmPm from "dayjs-ampm";

dayjs.extend(isAmPm);

const day = dayjs("2024/6/15 17:00");
console.log(day.isPm()); // true
