import { FC } from "react";
import { month, year } from "../../lib/days";
import CalendarTable from "../calendarTable/calendarTable";
import { styles } from "./calendar.css";

const Calendar: FC = () => {
	return (
		<div className={styles.container}>
			<h1>
				{year}年 {month}月
			</h1>
			<CalendarTable />
		</div>
	);
};

export default Calendar;
