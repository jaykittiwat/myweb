import React, { Component } from "react";
import HeaderLogin from "../../../HeaderLogin";
import NavbarLogin from "../../../demo";
import Showtable from "./table";
import Footerversion from "./../../../footerversion";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <HeaderLogin />
        <div className="row Nav-shadow posi">
          <NavbarLogin />
        </div>
        <Showtable />

        <div style={{ height: "30px" }}> </div>
        <Footerversion />
      </div>
    );
  }
}
export default Header;
