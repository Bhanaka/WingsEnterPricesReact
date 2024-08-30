import "./App.css";
// import { Button } from 'antd';
import React, { useState } from "react";
import TopMenu from "./components/Common/TopMenu";
import SideMenu from "./components/Common/SideMenu";
import { Layout } from "antd";
function App() {
  return (
    <>
      <Layout>
        <TopMenu></TopMenu>
      
      </Layout>
    </>
  );
}

export default App;
