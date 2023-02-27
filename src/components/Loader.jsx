import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loader() {
const antIconLoader = <LoadingOutlined style={{ fontSize: 30 }} />;
  return (
    <>
      <div className="text-center">
        <Spin indicator={antIconLoader} />
      </div>
    </>
  );
}
