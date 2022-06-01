import React from "react";
import { DatePicker, Space } from "antd";

function DatePickerComponent({
  value = "",
  onChange = () => {},
  placeholder = "",
  style = {},
}) {
  const dateFormat = "YYYY/MM/DD";

  return (
    <div>
      <DatePicker
        size="middle"
        showToday={false}
        style={style}
        format={dateFormat}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default DatePickerComponent;

// import React, { useState } from "react";
// import { DatePicker } from "antd";
// import moment from "moment";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import "../../style/dateComponent.scss";

// function DatePickerComponent({
//   value = "",
//   placeholder = "select webinar start Date",
//   status = "", //error
//   onChange = () => {},
//   onBlur = () => {},
// }) {
//   const [iconColor, setIconColor] = useState("close");
//   function disabledDate(current) {
//     return (
//       (current && current < moment().startOf("day")) ||
//       current.isoWeekday() === 7
//     );
//   }

//   return (
//     <DatePicker

//       superNextIcon={false}
//       placement={"bottomRight"}
//       superPrevIcon={false}
//       suffixIcon={
//         <ArrowDropDownIcon color={iconColor === "open" ? "primary" : "black"} />
//       }
//       placeholder={placeholder}
//       clearIcon={false}
//       value={value}
//       showToday={false}
//       format="DD/MM/YYYY"
//       bordered={false}
//       onChange={onChange}
//       onBlur={onBlur}
//       disabledDate={disabledDate}
//       status={status}
//     />
//   );
// }

// export default DatePickerComponent;
