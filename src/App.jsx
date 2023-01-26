import React from "react";
import "./main.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Layout, Space } from "antd";
import NavBar from "./components/NavBar";
import Home from "./pages/home/HomePage";
import Exchanges from "./pages/exchanges/ExchangesPage";
import Cryptocurrencies from "./pages/cryptocurrencies/CryptocurrenciesPage";
import CryptoDetails from "./pages/cryptodetails/CryptoDetails";
import News from "./pages/news/NewsPage";

function App() {
  return (
    <Router>
      <div className="flex overflow-hidden">
        <div className="w-[400px] bg-[#001529]">
          <NavBar />
        </div>
        <div className="w-full">
          <Layout>
            <div className="p-5">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div
            className="flex flex-col p-5 items-center bg-[#001529] text-white"
            level={5}
          >
            <div className="flex flex-col items-center text-xl">
              <span>Cryptoverse </span>
              <span>All rights reserved</span>
            </div>
            <Space className="mt-5">
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
