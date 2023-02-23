import React, { useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
        <Avatar
          src={icon}
          size={{ xs: 40, sm: 32, md: 56, lg: 30, xl: 60, xxl: 64 }}
        />
        <Typography.Title>
          <Link to="/" className="lg:text-2xl md:text-3xl text-xl">
            Cryptoverse
          </Link>
        </Typography.Title>
        <Button
          className=" lg:hidden flex items-center ml-10 bg-[#F9F9F9] "
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined className="text-black border-none" />
        </Button>
      </div>
      {activeMenu && (
        <Menu
          items={[
            { label: "Home", key: "/", icon: <HomeOutlined /> },
            {
              label: "Cryptocurrencies",
              key: "/cryptocurrencies",
              icon: <FundOutlined />,
            },
            {
              label: "Exchanges",
              key: "/exchanges",
              icon: <MoneyCollectOutlined />,
            },
            { label: "News", key: "/news", icon: <BulbOutlined /> },
          ]}
          onClick={({ key }) => {
            navigate(key);
          }}
          theme="dark"
          className="lg:mt-4 "
        ></Menu>
      )}
    </div>
  );
};

export default NavBar;
