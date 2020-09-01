import React, { Component } from "react";
import Logo from "./component/Img/logofarm.png";
import { Link } from "react-router-dom";
import "./HeaderStyle.css";

class Header extends Component {
  render() {
    return (

      <div>
        <div className="row">
          <img alt="logo" src={Logo} width="75px" height="75px" />
          <div className="col-sm-5">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="row container-fluid r2-c1 ">
                เว็บแอปพลิเคชันระบบการจัดการแม่พันธุ์โค
              </div>
              <div className="row  container-fluid r2-c1-t2">
                Webapplication Dam Management System
              </div>
            </Link>
          </div>
          <div className="col-sm-4 "></div>
          <div className="col-sm ">
            <div className="row float-right">
              <div className="dropdown" style={{ textAlign: "center" }}>
                <Link to="/login" style={{ textDecorationLine: "none" }}>
                  <div className="dropbtn1" style={{ paddingTop: "20px" }}>
                    เข้าสู่ระบบ
                  </div>
                </Link>
              </div>

              <div className="dropdown" style={{ textAlign: "center" }}>
                <div className="dropbtn1" style={{ paddingTop: "20px" }}>
                  ลงทะเบียน <i className="fa fa-caret-down"></i>
                </div>
                <div className="dropdown-content" style={{ textAlign: "left" }}>
                  <Link to="/registor">เจ้าของฟาร์ม</Link>
                  <Link to="/registor2">พนักงาน</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
