import React, { Component } from "react";
import HeaderLogin from "./../../HeaderLogin";
import NavbarLogin from "./../../Navbar";
import FromRegiscow from "./FormRegiscow";
class Header extends Component {
  render() {
    return (
      <div>
        <HeaderLogin />
        <NavbarLogin />
        <FromRegiscow />
      </div>
    );
  }
}
export default Header;
