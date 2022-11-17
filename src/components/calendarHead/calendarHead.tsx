import { FC } from "react";
import { weeks } from "../../constant/week";
import ThItem from "../thItem/thItem";

const CalendarHead: FC = () => {
	return (
		<thead>
			{weeks.map((week) => (
				<ThItem itemContent={week} />
			))}
		</thead>
	);
};

export default CalendarHead;
