import { CSSProperties, FC } from "react";
import { tdItemStyle } from "./tdItem.css";

type Props = {
	itemContent: string | number;
	style?: CSSProperties;
};

const TdItem: FC<Props> = ({ itemContent, style }) => {
	return (
		<td className={tdItemStyle.td} style={style}>
			{itemContent}
		</td>
	);
};

export default TdItem;
