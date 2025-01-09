import { useState } from "react";

let getTimeFromDate = (date) => date.toString().slice(16, 24);

export const MyComponent = (props) => {
	const [date, setDate] = useState(new Date());

	setTimeout (() => {
		setDate(new Date());},
	1000);

	const time = getTimeFromDate(date)

	return (
		<div>{time}</div>
	)
};
