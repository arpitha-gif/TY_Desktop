import React from "react";
import "antd/dist/antd.css";
import { Input } from "antd";

function InputComponent({
  placeholder = "",
  value = "",
  onChange = () => {},
  size = "default",
  style = {},
  status = "", //error or warning
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
      />
    </div>
  );
}

export default InputComponent;
