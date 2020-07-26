import React from "react";

// const isLoggedIn = true;

const checkStatus = () => {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <h1>Hello</h1>
  ) : (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

const App = () => <div className="container">{checkStatus()}</div>;

export default App;
