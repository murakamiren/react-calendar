import { FC } from "react";
import CalendarHead from "../calendarHead/calendarHead";
import { styles } from "./calendarTable.css";

const CalendarTable: FC = () => {
	return (
		<table className={styles.table}>
			<CalendarHead />
		</table>
	);
};

export default CalendarTable;
