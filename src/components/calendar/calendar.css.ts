import { style } from "@vanilla-extract/css";

export const styles = {
	container: style({
		width: "100%",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "12px",
	}),
};
