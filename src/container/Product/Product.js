import React from "react";
import "../Product/Product.css";
import { Layout } from "antd";
function Product() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Header className="header">
        <p>Hello</p>
      </Header>
      <Layout className="main">
        <Sider className="sider">Sider</Sider>
        <Content>Content</Content>
      </Layout>
    </>
  );
}
export default Product;
