import React from "react";
import LoginComponent from "./Form";

const isLoggedIn = false;

const conditionallyRender = () => {
  return isLoggedIn ? <h1>Hello</h1> : <LoginComponent />;
  // return isLoggedIn  && <LoginComponent />
};

const App = () => <div className="container">{conditionallyRender()}</div>;

export default App;
