import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";

function InputComponent({
  className="",
  placeholder = "",
  value = "",
  onChange = () => {},
  size = "default",
  style = {},
  status = "",
  type = ""
  //error or warning
}) {
  return (
    <div>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size={size}
        style={style}
        status={status}
        type={type}
      />
    </div>
  );
}

export default InputComponent;
