import React from "react";

function Header() {
  return (
    <div
      style={{
        width: "100%",
        display: "block",
        paddingTop: "10px",
        paddingLeft: "8px",
        borderBottom: "1px solid #e0e0e0",
        height: "65px",
        background: "#f7f7f7",
        position: "absolute",
        top: "0",
      }}
    >
      <img
        style={{
          width: "180px",
          height: "44px",
          marginLeft: "12px",
        }}
        src="https://cdn.monday.com/images/logos/monday_logo_short.png"
        alt="Monday logo"
      ></img>
    </div>
  );
}

export default Header;
