import React from "react";
import "./../Card/Card.css";
import { Carousel, Image, Title, Button, Rate } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { wrap } from "module";

const Card = ({ item1 }) => {
  return (<>
      {item1.map((y) => {
        return (
          <div className="card">
            <Carousel autoplay>
              {y.image.map((x) => {
                return (
                  <div>
                    <Image className="carsoul" src={x.item} width="100%" />
                  </div>
                );
              })}
            </Carousel>
            <h3 className="productname">{y.productName}</h3>
            <h3 className="productname" style={{ color: "blue" }}>
              ${y.price}/price{" "}
              <Button className="cart_btn">
                <ShoppingCartOutlined />
              </Button>
            </h3>
            <p className="description">{y.description}</p>
            <Rate style={{fontSize:15}} allowHalf defaultValue={y.rate} />
          </div>
        );
      })}</>
  );
};
export default Card;