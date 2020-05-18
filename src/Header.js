import React, { Component } from "react";

import { Link } from "react-router-dom";
import "./HeaderStyle.css";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-5">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="row container-fluid r2-c1 ">
                เว็บแอปพลิเคชันระบบการจัดการแม่พันธุ์โค
              </div>
              <div className="row  container-fluid r2-c1-t2">
                Webapplication Dam Management System
              </div>
            </Link>
          </div>
          <div className="col-md-5 "></div>
          <div className="col-md-2 ">
        <div className="row float-right">
        
            
            <div className="dropdown">
              <button className="dropbtn1">ลงทะเบียน   <i className="fa fa-caret-down"></i></button>
              <div className="dropdown-content">
                <Link to="/registor">เจ้าของฟาร์ม</Link>
                <Link to="#2">พนักงาน</Link>
              </div>
            </div>

            <div className="dropdown">
            <Link to="/login"><button className="dropbtn1">เข้าสู่ระบบ</button></Link> 
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
