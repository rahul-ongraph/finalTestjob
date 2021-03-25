import React, { useState, useEffect } from "react";
import InputField from "../../component/Input/InputField";
import ButtonComponent from "./../../component/Button/Button";
import "./../Signup/Signup.css";
import { Typography, Form } from "antd";
import { useHistory } from "react-router-dom";
function SignUp(props) {
  const { Title } = Typography;
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    email: "",
    State: "",
    district: "",
    area: "",
    password: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    State: "",
    district: "",
    area: "",
    password: "",
  });
  const handleChange = (e, text) => {
    setState({ ...state, [text]: e.target.value });
    validation();
  };

  const validation = () => {
    let error = {};
    if (!state.name) {
      error.name = "Name is required";
    } else if (/!^[\\p{L}]+$/.test(state.name)) {
      error.name = "Invalid name";
    }
    if (!state.email) {
      error.email = "Email is required";
    } else if (!/^[^]+@[^]+\.[a-z]{2,3}$/.test(state.email)) {
      error.email = "Invalid email";
    }
    if (!state.State) {
      error.State = "State is required";
    }
    if (!state.district) {
      error.district = "district is required";
    }
    if (!state.area) {
      error.area = "area is required";
    }
    if (!state.password) {
      error.password = "Password is required";
    } else if (
      !/((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,12})/.test(state.password)
    ) {
      error.password = "Invalid password";
    }
    setError(error);
  };

  const onSubmit = () => {
    if (state.email != "") {

    } else {
      alert("hiii");
    }
  };

  // const onSubmit = (e) => {
  //   console.log("aaaaaaaa", e);
  //   let registration = {
  //     name: name,
  //     email: email,
  //     State: State,
  //     district: district,
  //     area: area,
  //     password: password,
  //   };
  //   let olddata = localStorage.getItem("registration");
  //   if (olddata == null) {
  //     olddata = [];
  //     olddata.push(registration);
  //     localStorage.setItem("userData", JSON.stringify(olddata));
  //     console.log("Data saved", olddata);
  //   } else {
  //     let oldArr = JSON.parse(olddata);
  //     oldArr.push(registration);
  //     localStorage.setItem("userData", JSON.stringify(oldArr));
  //     console.log(oldArr, "hhg");
  //   }
  // };

  const { name, email, State, district, area, password } = state;
  return (
    <div className="main">
      <div className="signUpBox">
        <div>
          <ButtonComponent
            className="default_btn"
            Button="Login"
            onClick={() => history.push("/")}
          />
        </div>
        <div style={{ marginTop: 30 }}></div>
        <Title className="registration" level={3}>
          Registration
        </Title>
        <Form className="form">
          <InputField
            placeholder="Please Enter your Name"
            label="Full Name"
            value={name}
            onClick={(e) => handleChange(e, "name")}
          />
          {error.name && (
            <div style={{ color: "red" }}>
              <label>{error.name}</label>
            </div>
          )}
          <InputField
            type="Email"
            placeholder="Please Enter your Email"
            label="Email"
            value={email}
            onClick={(e) => handleChange(e, "email")}
          />
          {error.email && (
            <div style={{ color: "red" }}>
              <label>{error.email}</label>
            </div>
          )}
          <InputField
            placeholder="Please Enter your State"
            label="State"
            value={State}
            onClick={(e) => handleChange(e, "State")}
          />
          {error.State && (
            <div style={{ color: "red" }}>
              <label>{error.State}</label>
            </div>
          )}
          <InputField
            placeholder="Please Enter your District"
            label="District"
            value={district}
            onClick={(e) => handleChange(e, "district")}
          />
          {error.district && (
            <div style={{ color: "red" }}>
              <label>{error.district}</label>
            </div>
          )}
          <InputField
            placeholder="Please Enter your Area"
            label="Area"
            value={area}
            onChange={(e) => handleChange(e, "area")}
          />
          {error.area && (
            <div style={{ color: "red" }}>
              <label>{error.area}</label>
            </div>
          )}
          <InputField
            type="password"
            placeholder="Please Enter your password"
            label="Password"
            value={password}
            onChange={(e) => handleChange(e, "password")}
          />
          {error.password && (
            <div style={{ color: "red" }}>
              <label>{error.password}</label>
            </div>
          )}
          <ButtonComponent
            Button="Sign up"
            className="yellow_btn"
            onClick={onSubmit}
          />
        </Form>
      </div>
    </div>
  );
}
export default SignUp;
