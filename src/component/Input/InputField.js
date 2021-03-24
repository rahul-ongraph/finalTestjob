import React from "react";
import { Input } from "antd";
import "../Input/InputField.css";

const InputField = (props) => {
  const { type, placeholder, value, onClick } = props;
  return (
    <div  className="input_bottom">
      <label>
        {props.label}
        <strong style={{ color: "red" }}> *</strong>
      </label>

      <Input
        className="input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onClick}
        required
      />
    </div>
  );
};
export default InputField;
