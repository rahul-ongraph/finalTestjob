import React from "react";
import "./../Card/Card.css";
import { Typography } from "antd";
import CardImage from '../CardImage/CardImage'

const Card = ({item1}) => {
  const {Title} = Typography
  return (
    <div>
      <CardImage item1={item1}/>
   <h3 className="productname">Rich Green Blue(Rich Green,64 Gb) <h3 style={{color:"yellow"}}>$14999Price</h3> </h3>
    </div>
  );
};
export default Card;
