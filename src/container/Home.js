import React,{useState} from "react";
import "./../container/Home.css";
import InputField from "./../component/Input/InputField";
import ButtonComponent from "./../component/Button/Button"
import { Typography, Form } from "antd";
function Home() {
  const { Title } = Typography;
  const [state, setState] = useState({
    id: "",
    description: "",
    pquantity: "",
    price: "", 
  });
  const [error, setError] = useState({
    id: "",
    description: "",
    pquantity: "",
    price: "", 
  });
  const onChangeValue = (e, text) => {
    setState({ ...state, [text]: e.target.value });
  };
   const onSubmit = () => {
		 if(id !== '' ){
			 if(description !== ''){
			 }
			 else {
				 alert("please input description")
			 }
			}
			 else {
				alert("please input id")
			}
	// 	let addProduct = {
	// 		id:id,
	// 		description:description,	
	// 		pquantity:pquantity,
	// 		price:price,
	// 	};
	// 	let addItem;
	// 	addItem.push(addProduct);
	// 	localStorage.setItem("addProduct", JSON.stringify(addItem));
	// 	console.log("OldArr else => ",addItem );
	// 	// history.push('/')
	 }

     const {id,description,pquantity,price} = state       
  return (
    <div className="main">
        <div className="productadd">
      <Title level={3}>New Product Added</Title>
      <Form>
        <InputField
          type="number"
          placeholder="Please Enter your Product Id"
          label="Product Id"
          onChange={(e) => onChangeValue(e, "Product Id")}
        />
         <InputField
          type="text"
          placeholder="Please Enter your Product Description"
          label="Product Desc"
          onChange={(e) => onChangeValue(e, "Product Desc")}
        />
        <InputField
          type="number"
          placeholder="Please Enter your Quantity"
          label="Product Quantity"
          onChange={(e) => onChangeValue(e, "Product Quantity")}
        />
         <InputField
          type="number"
          placeholder="Please Enter your Product price"
          label="Product price"
          onChange={(e) => onChangeValue(e, "Product Price")}
        />
         <ButtonComponent
         onClick={() => onSubmit()}
         Button="Add new product"
         className="yellow_btn"
         />
      </Form>
      </div>
    </div>
  );
}
export default Home;
