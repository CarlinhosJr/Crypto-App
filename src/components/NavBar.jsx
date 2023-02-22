import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../assets/cryptocurrency.png";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1024) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="lg:h-screen lg:m-4 ">
      <div className=" md:flex lg:justify-start items-center gap-5 flex justify-around p-5 w-full">
        <Avatar src={icon} size={{ xs: 40, sm: 32, md: 56, lg: 30, xl: 60, xxl: 64 }}  />
        <Typography.Title >
          <Link to="/" className="lg:text-2xl md:text-3xl text-xl">Cryptoverse</Link>
        </Typography.Title>
        <Button className=" lg:hidden flex items-center ml-10 bg-[#F9F9F9] " onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined className="text-black border-none" />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark" className="lg:mt-4 ">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default NavBar;
