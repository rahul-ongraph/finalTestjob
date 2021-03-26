import React from "react";
import "./../Checkbox/Checkbox.css";
import { Checkbox } from "antd";

const CategoryBox = ({ item1,onChange }) => {
  return (
    <div>
      {item1.map((item, index) => (
        <Checkbox className="checkbox" onChange={onChange}  level={2} value={item.value}>
          {item.item}
        </Checkbox>
      ))}
    </div>
  );
};
export default CategoryBox;
