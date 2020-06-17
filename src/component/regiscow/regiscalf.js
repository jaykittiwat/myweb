import React, { Component } from "react";
import HeaderLogin from "./../../HeaderLogin";
import NavbarLogin from "./../../Navbar";
import FromRegiscalf from "./FormRegiscalf";
class regisclaf extends Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div >
      <FromRegiscalf />
    </div>
    );
  }
}
export default regisclaf;
