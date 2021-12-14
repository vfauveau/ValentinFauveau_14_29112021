import React from "react";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = (props) => {
    const [startDate, setStartDate] = useState(props.startDate);
    return (
      <DatePicker id={props.id} selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };
export default Example
