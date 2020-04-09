import React, { Component } from 'react';
import "./styleWebpage.css";
import imgcow1 from "../Img/imgcow1.jpg";
import cow from "../Img/cow.png";
import cow2 from "../Img/cow2.png";
import cow3 from "../Img/cow3.png";
import cow4 from "../Img/cow4.png";
import cow5 from "../Img/cow5.png";
import cow6 from "../Img/cow6.png";





class Webpage extends Component{

  render(){
    return(
      <div className="container-fluid">
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
       <img className="bg-magin" src={imgcow1} alt="asd"></img>
        </div>

        <div className="r4-pad" >
            <div className="row">
                <div className="col box-bg"><img src={cow} alt="cow" className="img1-box" ></img><p>ระบบบันทึกพันธุ์ประวัติโค</p><p>สามารถบันทึกสายพันธุ์ประวัติโคได้ </p></div>
                <div className="col box-bg "><img src={cow2} alt="cow2" className="img2-box" ></img><p>ระบบบันทึกการสืบพันธุ์แม่โค</p></div>
                <div className="col box-bg"><img src={cow3} alt="cow3" className="img3-box" ></img><p>ระบบบันทึกการจัดการลูกโค</p><p>บันทึกข้อมูล การสูญเขา อย่านม ตีเบอร์ ของลูกโค</p></div>
            </div>
            <div className="row">
                <div className="col box-bg"><img src={cow4} alt="cow4" className="img4-box" ></img><p>ระบบบันทึกการรักษา</p><p>บันทึกการรักษา โรคทั่วไป การถ่ายพยาธิ การฉีดวัคซีน ของโค</p></div>
                <div className="col box-bg"><img src={cow5} alt="cow5" className="img5-box" ></img><p>แจ้งเตือนกิจกรรมต่าง ๆ</p><p>แจ้งเตือนวันที่ สำหรับดำเนินกิจกรรมต่าง ๆ ให้ผู้ใช้ได้รับทราบ </p></div>
                <div className="col box-bg"><img src={cow6} alt="cow6" className="img6-box" ></img><p>ออกรายงาน</p><p>ออกรายงาน และแสดงข้อมูลสถิติ </p></div>
            </div>
        </div>

        <div className="footer-style row ">
            <div className="col-4">ทีมพัฒนา</div> <div className="col-4">ติดต่อ</div> <div className="col-4">ที่ปรึกษา</div>
        </div>
      </div>
    )
  }
}

export default Webpage;