import { FC } from "react";
import CalendarTable from "../calendarTable/calendarTable";
import { styles } from "./calendar.css";

const Calendar: FC = () => {
	return (
		<div className={styles.container}>
			<CalendarTable />
		</div>
	);
};

export default Calendar;
