import React, { Component } from 'react';
import "./styleWebpage.css";
import imgcow1 from "../Img/imgcow1.jpg";
class Webpage extends Component{

  render(){
    return(
      <div className=" container-fluid">
        <div className="row r1-style">
            <div className="col r1-c1">01/01/2020 |10.00 Pm</div> <div className="col r1-c2">ติดต่อได้ที่ | jaykittiwat2542@gmail.com</div>
        </div>

        <div className="row">
            <div className="col-4"> 
                <div className="row r2-c1">เว็บแอปพลิเคชันระบบการจัดการแม่พันธุ์โค</div> 
                <div className="row r2-c1-t2">Webapplication Dam Management System</div>
            </div> 
               <div className="col-6"></div> 
            <div className="col-1 r2-c2">ลงทะเบียน</div>
            <div className="col-1 r2-c2 ">เช้าสู่ระบบ</div>
        </div>
            
        <div className="row">
            <img src={imgcow1} alt="Cow"></img>
        </div>

        <div className="r4-pad" >
            <div className="row">
                <div className="col box-bg">1</div>
                <div className="col box-bg">2</div>
                <div className="col box-bg">3</div>
            </div>
            <div className="row">
                <div className="col box-bg">4</div>
                <div className="col box-bg">5</div>
                <div className="col box-bg">6</div>
            </div>
        </div>

        <div>
            Footer
        </div>
      </div>
    )
  }
}

export default Webpage;