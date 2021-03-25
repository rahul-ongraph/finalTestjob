import React from "react";
import "./../Card/Card.css";
import { Carousel, Image,Title } from "antd";

const CardImage = ({ item1 }) => {
  console.log("data===>",item1)
  return (
    <div>
      <Carousel autoplay>
        {item1?.Image?.map((x) => {
          return (
            <div>
              <Image className="carsoul" src={x.item} width="100%" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default CardImage;