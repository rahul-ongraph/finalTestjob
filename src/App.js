import React from "react";
import Login from "./container/Login/Login";
import SignUp from "./container/Signup/Signup";
import Product from './container/Product/Product'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (

    <Product />
    // <Router>
    //   <div>
    //     <Switch>
    //       <Route exact path="/">
    //         <Login />
    //       </Route>
    //       <Route path="/SignUp">
    //         <SignUp />
    //       </Route>
    //       <Route path="/Product">
    //         <Product />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}
export default App;
