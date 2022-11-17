import { FC } from "react";
import { weeks } from "../../constant/week";
import ThItem from "../thItem/thItem";

const CalendarHead: FC = () => {
	return (
		<thead>
			<tr>
				{weeks.map((week) => (
					<ThItem itemContent={week} />
				))}
			</tr>
		</thead>
	);
};

export default CalendarHead;
