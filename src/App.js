import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Index from './pages/index'
import Server from './pages/server'
import ServerShop from './pages/serverShop'
import Rule from './pages/rule'
import Team from './pages/team'
import Layout from "./layout";
import './App.css'
import { getStore } from "./services/MinecartAPI";

const favicon = document.getElementById("favicon")

export default () => {
  const [storeInstance, setStoreInstance] = useState([])

  useEffect (() => {
    let store = getStore()

    favicon.href = store.favicon

    setStoreInstance(store)
  }, [])

  if (storeInstance.length ==0) {
    return "carregando";
  }

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
