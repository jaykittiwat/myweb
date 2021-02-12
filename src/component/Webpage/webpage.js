import React, { Component } from 'react';
import "../styleWebpage.css";
import imgcow1 from "../Img/cowWave2.jpg";
import Header from '../../Header';

class Webpage extends Component{
  render(){
    return(
      <div className="container-fluid">
        <Header/>
            
        <div className="row" >
     
       <img className="bg-img" src={imgcow1} alt="asd" />
       
       <div className="slide-right "><div style={{fontSize:"3vw"}} className="slide-right-text01">ยินดีต้อนรับเข้าสู่</div><div style={{fontSize:"2vw"}} className="slide-right-text01">เว็บแอปพลิเคชันระบบการจัดการแม่พันธุ์โค</div><div style={{fontSize:"1vw"}} className="slide-right-text01">Webapplication Dam Management System </div></div>
        </div>
        <div className=" row " >
          <div className="row footer-padding container-fluid" >
            <div className="col-md-3" >
              <li className="footer-style2">ผู้พัฒนา</li>
              <ul>
                <li className="footer-style3">นายกิตติวัฒน์ ศรีชัยพล</li>
                <li className="footer-style3">นายไชยวัฒน์ อธิกรม</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li className="footer-style2">ที่ปรึกษา</li>
              <ul>
                <li className="footer-style3">ดร.ภูวิศสรณ์ ภูมิสรณคมณ์</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li className="footer-style2">ติดต่อได้ที่</li>
              <ul>
                <li className="footer-style3">0928412006</li>
                <li className="footer-style3">jaykittiwat2542@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li className="footer-style2">หมายเหตุ</li>
              <ul>
                <li className="footer-style3">version 0.1(alpha)</li>
              
              </ul>
            </div>
          </div>
        </div>
        
        
      </div>
    )
  }
}

export default Webpage;

