import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import Index from './pages/index'
import Rule from './pages/rule'
import Layout from "./layout";

var storeInstance = {
  layout: "default"
};

export default function App() {
  return (
    <Router>
      <Layout exact path="/" layout={storeInstance.layout} component={Rule} />
      <Layout path="/rules" layout={storeInstance.layout} component={Rule} />
    </Router>
  );
}
