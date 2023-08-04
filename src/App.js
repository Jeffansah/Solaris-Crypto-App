import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout style={{ minHeight: "100vh" }}>
          <div className="routes">
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Solaris <br /> All Rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">
              <Typography.Text style={{ color: "rgb(180, 180, 180)" }}>
                Home
              </Typography.Text>
            </Link>
            <Link to="/exchanges">
              <Typography.Text style={{ color: "rgb(180, 180, 180)" }}>
                Exchanges
              </Typography.Text>
            </Link>
            <Link to="/News">
              <Typography.Text style={{ color: "rgb(180, 180, 180)" }}>
                News
              </Typography.Text>
            </Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
