import React from "react";
import Chart from "./Chart";
import HeaderDetail from "./HeaderDetail";

const Header = () => {
  return (
    <div
      className="d-flex text-white"
      style={{
        "align-items": "center",
        background: "rgb(37,120,153)",
        background:
          "linear-gradient(90deg, rgba(37,120,153,1) 0%, rgba(13,112,135,1) 0%, rgba(38,102,115,1) 0%, rgba(64,124,175,1) 41%, rgba(60,99,145,1) 100%, rgba(19,70,132,1) 100%)",
      }}
    >
      <div style={{ width: "35%" }}>
        <Chart />
      </div>
      <div style={{ width: "65%" }}>
        <HeaderDetail />
      </div>
    </div>
  );
};

export default Header;
