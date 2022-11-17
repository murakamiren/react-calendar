import { FC } from "react";
import { thItemStyle } from "./thItem.css";

type Props = {
	itemContent: string;
};

const ThItem: FC<Props> = ({ itemContent }) => {
	return <th className={thItemStyle.th}>{itemContent}</th>;
};

export default ThItem;
