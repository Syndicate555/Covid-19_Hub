import React from "react";
import Logo from "../../assets/logo/default.png";

const Header = () => {
  return (
    <img
      style={{
        width: "200px",
        height: "60px",
        textAlign: "center",
        paddingTop: "20px",
        paddingRight: "20px",
      }}
      src={Logo}
    ></img>
  );
};
export default Header;
