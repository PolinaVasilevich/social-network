import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App;
