import React from "react";
import Input from "./Inputs";
import Button from "./Button";

const LoginComponent = () => {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" value="Login" />
    </form>
  );
};

export default LoginComponent;
