import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// note the datepicker wont display properly without this css import
import "../styles/datepicker.css";
import { useState } from "react";

// Date picker component from "react-datepicker" (npm)
// we use the startDate prop to define the startDate of the Datepicker
const DatePick = (props) => {
    const [startDate, setStartDate] = useState(props.startDate);
    return <DatePicker id={props.id} selected={startDate} dateFormat={"dd/MM/yyyy"} onChange={(date) => setStartDate(date)} />
};
export default DatePick;
