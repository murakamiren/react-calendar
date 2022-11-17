import { FC } from "react";

type Props = {
	itemContent: string;
};

const TdItem: FC<Props> = ({ itemContent }) => {
	return <td>{itemContent}</td>;
};

export default TdItem;
