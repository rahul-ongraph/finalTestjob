import React, { useState } from "react";
import InputField from "../../component/Input/InputField";
import ButtonComponent from "./../../component/Button/Button";
import "./../Login/Login.css";
import { Typography, Form, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
function Login(props) {
  const history = useHistory();
  const { Title } = Typography;

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const onChangeValue = (e, target) => {
    setState({ [target]: e.target.value });
  };
  const onSubmit = () => {
    let error = {};
    if (!state.email) {
      error.email = "Email is required";
    } else if (!/^[^]+@[^]+\.[a-z]{2,3}$/.test(state.email)) {
      error.email = "Invalid email";
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

  const { email, password } = state;
  return (
    <div className="main">
      <div className="loginBox">
        <div>
          <ButtonComponent
            className="default_btn"
            Button="Signup"
            onClick={() => history.push("/SignUp")}
          />
        </div>
        <div style={{ marginTop: 60 }}></div>
        <Title className="login" level={3}>
          Login
        </Title>
        <Form className="form">
          <InputField
            placeholder="Please Enter your Email"
            label="Email"
            value={email}
            onClick={(e) => onChangeValue(e, "email")}
          />
          {error.email && (
            <div style={{ color: "red" }}>
              <label>{error.email}</label>
            </div>
          )}
          <div style={{ marginTop: 10 }}></div>
          <div>
            <InputField
              type="password"
              placeholder="Please Enter your password"
              label="Password"
              value={password}
              onClick={(e) => onChangeValue(e, "password")}
            />
            {error.password && (
              <div style={{ color: "red" }}>
                <label>{error.password}</label>
              </div>
            )}
          </div>
          <Checkbox  className="checkBox">Remember me</Checkbox>
          <ButtonComponent
            onClick={onSubmit}
            Button="Login"
            className="yellow_btn"
          />
        </Form>
      </div>
    </div>
  );
}
export default Login;
