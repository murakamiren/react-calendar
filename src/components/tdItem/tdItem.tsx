import { FC } from "react";
import { tdItemStyle } from "./tdItem.css";

type Props = {
	itemContent: string | number;
	isCurrentMonth?: boolean;
};

const TdItem: FC<Props> = ({ itemContent, isCurrentMonth = true }) => {
	return (
		<td className={tdItemStyle.td} style={{ color: isCurrentMonth ? "#fff" : "gray" }}>
			{itemContent}
		</td>
	);
};

export default TdItem;
