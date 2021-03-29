import React, { useState } from "react";
import "../Product/Product.css";
import CategoryBox from "../../component/Checkbox/Checkbox";
import { Layout, AutoComplete, Input, Carousel, Image, Typography, Button } from "antd";
import Card from "../../component/Card/Card";
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

const item4 = [
  {
    image: [
      {
        item: "/assets/realmec11.jpeg",
      },
      {
        item: "/assets/realme1.jpeg",
      },
      {
        item: "/assets/realme2.jpeg",
      },
    ],
    price: 14999,
    productName: "Rich Green Blue(Rich Green,64 Gb)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Electronics",
    brand: "Realme",
    rate: 5,
  },
  {
    image: [
      {
        item: "/assets/jeans.jpeg",
      },
      {
        item: "/assets/jeans1.jpeg",
      },
      {
        item: "/assets/jeans3.jpeg",
      },
    ],
    price: 1999,
    productName: "Jeans(Highlander)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Clothes",
    brand: "Highlander",
    rate: 4,
  },
  {
    image: [
      {
        item: "/assets/oil.jpeg",
      },
      {
        item: "/assets/oil1.jpeg",
      },
      {
        item: "/assets/oil2.jpeg",
      },
    ],
    price: 750,
    productName: "Fortuner oil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Grocery",
    brand: "Fortuner",
    rate: 5,
  },
  {
    image: [
      {
        item: "/assets/samsung1.jpeg",
      },
      {
        item: "/assets/samsung2.jpeg",
      },
      {
        item: "/assets/samsung3.jpeg",
      },
    ],
    price: 24999,
    productName: "Samsung Refrigator(415 L)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Electronics",
    brand: "Samsung",
    rate: 5,
  },
  {
    image: [
      {
        item: "/assets/shirt.jpeg",
      },
      {
        item: "/assets/shirt1.jpeg",
      },
      {
        item: "/assets/shirt2.jpeg",
      },
    ],
    price: 1499,
    productName: "Shirt(Peter England)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Clothes",
    brand: "Peter England",
    rate: 5,
  },
  {
    image: [
      {
        item: "/assets/atta1.jpeg",
      },
      {
        item: "/assets/atta2.jpeg",
      },
      {
        item: "/assets/atta3.jpeg",
      },
    ],
    price: 499,
    productName: "Ashirvad Atta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Grocery",
    brand: "Ashirvad",
    rate: 4.5,
  },
  {
    image: [
      {
        item: "/assets/tshirt2.jpeg",
      },
      {
        item: "/assets/tshirt3.jpeg",
      },
      {
        item: "/assets/tshirt1.jpeg",
      },
    ],
    price: 999,
    productName: "tShirt",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "Clothes",
    brand: "tshirt",
    rate: 3,
  },
];

function Product(props) {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(item4);
  const [category, setCategory] = useState([])
  const [brand, setBrand] = useState([])
  const [price, setPrice] = useState([])
  const { Header, Sider, Content } = Layout;
  const { Title } = Typography;
  const itemCategory = [
    {
      "item": "Grocery",
    },
    {
      "item": "Clothes",
    },
    {

      "item": "Electronics",
    },
  ];

  const brandCategory = [
    {
      item: "Samsung",
    },
    {
      item: "Realme",
    },
    {
      item: "Highlander",
    },
    {
      item: "Fortuner",
    },
    {
      item: "Peter England",
    },
  ];
  const priceCategory = [
    {

      item: "0 to 999",
    },
    {

      item: "1000 to 9999",
    },
    {

      item: "9999 to 29999",
    },
  ];

  const searchFilter = (event) => {
    if (event.target.value == "") {
      setData(item4)
    } else {
      const temp = item4.filter((value) => (value.productName.toLowerCase().includes(event.target.value.toLowerCase())))
      setData(temp)
    }
    setSearch(event.target.value);
  };

  function onChangeCategory(value) {
    console.log("hhhhhhhhhhhh", value)
    if (value.length == 0) {
      setData(item4)
    } else {
      let temp1 = []
      value.map((item1) => {
        const temp = item4.filter((item) => item.category.toLowerCase() == item1.toLowerCase())
        console.log("hhhhhhhhhhhh", temp, value)
        let temp2 = temp1.concat(temp)
        temp1 = temp2
      })
      setData(temp1)
    }
    setCategory(value)
  }

  function onChangeBrand(value) {
    console.log("hhhhhhhhhhhh", value)
    if (value.length == 0) {
      setData(item4)
    } else {
      let temp1 = []
      value.map((item1) => {
        const temp = item4.filter((item) => item.brand.toLowerCase() == item1.toLowerCase())
        console.log("hhhhhhhhhhhh", temp, value)
        let temp2 = temp1.concat(temp)
        temp1 = temp2
      })
      setData(temp1)
    }
    setBrand(value)
  }

  function onChangePrice(value) {
    if (value.length == 0) {
      setData(item4)
    } else {
      let temp1 = []
      value.map((item1) => {
        const x = item1.split(" ")
        const min = x[0]
        const max = x[2]
        const temp = item4.filter((item) => item.price <= max && item.price > min)
        console.log("aaaaaaa", temp)
        let temp2 = temp1.concat(temp)
        temp1 = temp2
      })
      setData(temp1)
    }
    setPrice(value)
  }

  return (
    <>
      <div className="main">
        <Header className="header">
          <MenuOutlined className="menu_icon " />
          <Input.Group className="serachbar">
            <Input
              className="input"
              size="large"
              value={search}
              placeholder="Search product  Name..."
              prefix={<SearchOutlined style={{ fontSize: 20 }} />}
              onChange={(event) => searchFilter(event)}
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
              <CategoryBox
                onChange={onChangeCategory}
                item1={itemCategory} />
              <Title className="category" style={{ color: "green" }} level={5}>
                Brand
              </Title>
              <CategoryBox
                onChange={onChangeBrand}
                item1={brandCategory} />
              <Title className="category" style={{ color: "green" }} level={5}>
                Price
              </Title>
              <CategoryBox
                onChange={onChangePrice}
                item1={priceCategory} />
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
                <Card item1={data} />
              </Content>
            </div>
          </Content>
        </Layout>
      </div>
    </>
  );
}
export default Product;
