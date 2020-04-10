import React, { Component } from 'react';
import "../styleWebpage.css";
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
            <div className="col-md r1-c1">01/01/2020 |10.00 Pm</div> <div className="col r1-c2">ติดต่อได้ที่ | jaykittiwat2542@gmail.com</div>
        </div>

        <div className="row">
            <div className="col-md-5"> 
                <div className="row container-fluid r2-c1 ">เว็บแอปพลิเคชันระบบการจัดการแม่พันธุ์โค</div> 
                <div className="row  container-fluid r2-c1-t2">Webapplication Dam Management System</div>
            </div> 
               <div className="col-5"></div> 
            <div className="col-md-1 r2-c2">ลงทะเบียน</div>
            <div className="col-md-1 r2-c2 ">เข้าสู่ระบบ</div>
        </div>
            
        <div className="row">
        
       <img className="bg-img" src={imgcow1} alt="asd"></img>
       
        </div>

        <div className="r4-pad container-fluid" >
            <div className="row">
                <div className="col-md box-bg"><img src={cow} alt="cow" className="img1-box box" ></img> <p className="box-style1">ระบบบันทึกพันธุ์ประวัติโค</p>   <p className="box-style2">สามารถบันทึกสายพันธุ์ประวัติโคได้ </p></div>
                <div className="col-md box-bg "><img src={cow2} alt="cow2" className="img2-box" ></img> <p  className="box-style1">ระบบบันทึกการสืบพันธุ์แม่โค</p> <p className="box-style2"> TEXT</p></div>
                <div className="col-md box-bg"><img src={cow3} alt="cow3" className="img3-box" ></img> <p   className="box-style1">ระบบบันทึกการจัดการลูกโค</p>  <p className="box-style2">บันทึกข้อมูล การสูญเขา อย่านม ตีเบอร์ ของลูกโค</p></div>
            </div>
            <div className="row">
                <div className="col-md box-bg"><img src={cow4} alt="cow4" className="img4-box" ></img> <p  className="box-style1">ระบบบันทึกการรักษา</p>         <p className="box-style2">บันทึกการรักษา โรคทั่วไป การถ่ายพยาธิ การฉีดวัคซีน ของโค</p></div>
                <div className="col-md box-bg"><img src={cow5} alt="cow5" className="img5-box" ></img> <p  className="box-style1">แจ้งเตือนกิจกรรมต่าง ๆ</p>       <p className="box-style2">แจ้งเตือนวันที่ สำหรับดำเนินกิจกรรมต่าง ๆ ให้ผู้ใช้ได้รับทราบ </p></div>
                <div className="col-md box-bg"><img src={cow6} alt="cow6" className="img6-box" ></img> <p  className="box-style1">ออกรายงาน</p>                <p className="box-style2">ออกรายงาน และแสดงข้อมูลสถิติ </p></div>
            </div>
        </div>

        <div className="footer-style row ">
          <div className="row footer-padding container-fluid">
            <div className="col-md-4"><h2>ผู้พัฒนา</h2><ul><li>นายกิตติวัฒน์ ศรีชัยพล</li><li>นายไชยวัฒน์  อธิกรม</li></ul></div> 
            <div className="col-md-4"><h2>ที่ปรึกษา</h2><ul><li>ดร.ภูวิศสรณ์ ภูมิสรณคมณ์</li></ul></div> 
            <div className="col-md-4"><h2>ติดต่อได้ที่</h2><ul><li>0928412006</li></ul></div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Webpage;