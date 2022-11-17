import dayjs from "dayjs";
import { weeks } from "../constant/week";

const nowDate = dayjs();
export const year = nowDate.year();
export const month = nowDate.month();
export const date = nowDate.date();

export const startDay = nowDate.startOf("month").day();
export const endDate = nowDate.endOf("month").date();
export const lastMonthEndDate = nowDate.add(-1).endOf("month").date();

export const calendarRow = Math.ceil((startDay + endDate) / weeks.length);
