import { FC } from "react";
import CalendarBody from "../calendarBody/calendarBody";
import CalendarHead from "../calendarHead/calendarHead";
import { styles } from "./calendarTable.css";

const CalendarTable: FC = () => {
	return (
		<table className={styles.table}>
			<CalendarHead />
			<CalendarBody />
		</table>
	);
};

export default CalendarTable;
