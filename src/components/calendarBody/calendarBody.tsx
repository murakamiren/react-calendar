import { FC } from "react";
import { weeks } from "../../constant/week";
import { calendarRow, date, endDate, lastMonthEndDate, startDay } from "../../lib/days";
import TdItem from "../tdItem/tdItem";

const CalendarBody: FC = () => {
	let count = 0;
	console.log(endDate);

	return (
		<tbody>
			{[...Array(calendarRow)].map((_, i) => (
				<tr>
					{weeks.map((_, j) => {
						if (i === 0 && j < startDay) {
							return <TdItem itemContent={lastMonthEndDate - startDay + j + 2} style={{ color: "gray" }} />;
						}

						if (count > endDate - 1) {
							count++;
							return <TdItem itemContent={count - endDate} style={{ color: "gray" }} />;
						}

						if (count === date - 1) {
							count++;
							return <TdItem itemContent={count} style={{ color: "tomato" }} />;
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
