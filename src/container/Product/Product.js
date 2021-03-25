import React from "react";
import "../Product/Product.css";
import CategoryBox from "../../component/Checkbox/Checkbox";
import { Layout, AutoComplete, Input, Carousel, Image, Typography } from "antd";
import Card from "../../component/Card/Card";
// import {
//   carsoul1,
//   carsoul2,
//   carsoul3,
//   carsoul4,
//   carsoul5,
//   carsoul6,
//   carsoul7,
//   realme1,
//   realmec11,
//   realme2,
// } from "../../../public/assets/index";
import {
  HomeFilled,
  GiftFilled,
  MailFilled,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
function Product(props) {
  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  const item1 = [
    {
      id: 1,
      value: 5,
      item: "Grocery",
    },
    {
      id: 2,
      value: 4,
      item: "Clothes",
    },
    {
      id: 3,
      value: 5,
      item: "Electronics",
    },
  ];
  const item2 = [
    {
      id: 1,
      value: 5,
      item: "Samsung",
    },
    {
      id: 2,
      value: 4,
      item: "Clothes",
    },
    {
      id: 3,
      value: 5,
      item: "Electronics",
    },
  ];
  const item3 = [
    {
      id: 1,
      value: 5,
      item: "Samsung",
    },
    {
      id: 2,
      value: 4,
      item: "Clothes",
    },
    {
      id: 3,
      value: 5,
      item: "Electronics",
    },
  ];
  const item4 = [
    {
      image: [
        {
          id: 1,
          value: 5,
          item: "/assets/realmec11.jpeg",
        },
        {
          id: 2,
          value: 4,
          item: "/assets/realme1.jpeg",
        },
        {
          id: 3,
          value: 5,
          item: "/assets/realme2.jpeg",
        },
      ],
      price: 14999,
      productName:"Rich Green Blue(Rich Green,64 Gb)"
    },
  ];
  return (
    <>
      <div className="main">
        <Header className="header">
          <MenuOutlined className="menu_icon " />
          <Input.Group className="serachbar">
            <Input
              className="input"
              size="large"
              // value={search}
              placeholder="Search product  Name..."
              prefix={<SearchOutlined style={{ fontSize: 20 }} />}
              // onChange={(event) => searchFilter(event)}
            />
          </Input.Group>
          <BellOutlined className="menu_icon " />
          <ShoppingCartOutlined className="menu_icon " />
          <UserOutlined className="menu_icon " />
        </Header>
        <Layout>
          <Sider className="sider ant-layout-sider">
            <HomeFilled className="icon  iconPosition" />
            <GiftFilled className="icon  iconPosition" />
            <MailFilled className="icon  iconPosition" />
          </Sider>
          <Content style={{ display: "flex" }}>
            <div className="categoryContent">
              <Title className="category" style={{ color: "green" }} level={5}>
                Category
              </Title>
              <CategoryBox item1={item1} />
              <Title className="category" style={{ color: "green" }} level={5}>
                Brand
              </Title>
              <CategoryBox item1={item2} />
              <Title className="category" style={{ color: "green" }} level={5}>
                Price
              </Title>
              <CategoryBox item1={item3} />
            </div>
            <div className="productContent">
              <Carousel autoplay>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul6.jpeg"}
                    width="100%"
                  />
                </div>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul5.jpeg"}
                    width="100%"
                  />
                </div>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul2.jpeg"}
                    width="100%"
                  />
                </div>
                <div>
                  <Image
                    className="carsoul"
                    src={"/assets/carsoul7.jpeg"}
                    width="100%"
                  />
                </div>
              </Carousel>
              <Content className="ContentCard">
                <div className="card1">
                  <Card item1={item4} />
                </div>
                <div className="card2"></div>
                <div className="card3"></div>
                <div className="card1"></div>
              </Content>
            </div>
          </Content>
        </Layout>
      </div>
    </>
  );
}
export default Product;
