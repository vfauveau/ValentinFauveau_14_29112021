import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "../styles/datepicker.css";
const DatePickerComp = (props) => {
    const [startDate, setStartDate] = useState(props.startDate);
    return <DatePicker id={props.id} selected={startDate} dateFormat={"dd/MM/yyyy"} onChange={(date) => setStartDate(date)} />;
};
export default DatePickerComp;
