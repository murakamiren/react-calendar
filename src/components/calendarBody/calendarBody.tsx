import { FC } from "react";
import { weeks } from "../../constant/week";
import { calendarRow, endDate, lastMonthEndDate, startDay } from "../../lib/days";
import TdItem from "../tdItem/tdItem";

const CalendarBody: FC = () => {
	let count = 0;
	return (
		<tbody>
			{[...Array(calendarRow)].map((_, i) => (
				<tr>
					{weeks.map((_, j) => {
						if (i === 0 && j < startDay) {
							return <TdItem itemContent={lastMonthEndDate - startDay + j + 2} isCurrentMonth={false} />;
						}

						if (count > endDate) {
							count++;
							return <TdItem itemContent={count - endDate - 1} isCurrentMonth={false} />;
						}
						count++;
						return <TdItem itemContent={count} />;
					})}
				</tr>
			))}
		</tbody>
	);
};

export default CalendarBody;
