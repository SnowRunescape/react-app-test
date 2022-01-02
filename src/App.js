import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Index from './pages/index'
import Server from './pages/server'
import ServerShop from './pages/serverShop'
import Rule from './pages/rule'
import Team from './pages/team'
import Layout from "./layout";
import './App.css'

var storeInstance = {
  name: "Minecart",
  storeIp: "jogar.snowdev.com.br",
  discord: "451861943364616192",
  layout: "default",
  logo: "https://cdn.minecart.com.br/assets/img/logo.png",
  background: "https://cdn.minecart.com.br/assets/img/slide/slide-default-1.png",
  colors: {
    navbar: "#662780"
  }
}

export default () => {
  return (
    <Router>
      <Layout exact path="/" store={storeInstance} component={Index} />
      <Layout path="/shop" store={storeInstance} component={Server} />
      <Layout path="/shop/:shop" store={storeInstance} renderSideBar={renderSideBar()} component={ServerShop} />
      <Layout path="/rules" store={storeInstance} component={Rule} />
      <Layout path="/team" store={storeInstance} component={Team} />
    </Router>
  );
}

function renderSideBar()
{
  return false;
}
