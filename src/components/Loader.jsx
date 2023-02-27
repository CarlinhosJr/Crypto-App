import React from "react";
import { Spin } from "antd";

export default function Loader() {
  return (
    <>
      <div className="text-center">
        <Spin size="large" />
      </div>
    </>
  );
}
