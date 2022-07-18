import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import { useTypedSelector } from "./hooks/useTypedSelector";

const App = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Router>
      {isAuth && <Header />}
      <AppRouter />
    </Router>
  );
};

export default App;
