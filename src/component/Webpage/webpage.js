import React, { Component } from 'react';
import "../styleWebpage.css";
import imgcow1 from "../Img/cowWave.jpg";
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
        <div className=" row ">
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

/*
<div className="r4-pad container-fluid" >
<div className="row">
    <div className="col-md box-bg"><img src={cow} alt="cow" className="img1-box" ></img> <p className="box-style1">ระบบบันทึกพันธุ์ประวัติโค</p>   <p className="box-style2">สามารถบันทึกสายพันธุ์ประวัติโคได้ </p></div>
    <div className="col-md box-bg "><img src={cow2} alt="cow2" className="img2-box" ></img> <p  className="box-style1">ระบบบันทึกการสืบพันธุ์แม่โค</p> <p className="box-style2"> TEXT</p></div>
    <div className="col-md box-bg"><img src={cow3} alt="cow3" className="img3-box" ></img> <p   className="box-style1">ระบบบันทึกการจัดการลูกโค</p>  <p className="box-style2">บันทึกข้อมูล การสูญเขา อย่านม ตีเบอร์ ของลูกโค</p></div>
</div>
<div className="row">
    <div className="col-md box-bg"><img src={cow4} alt="cow4" className="img4-box" ></img> <p  className="box-style1">ระบบบันทึกการรักษา</p>         <p className="box-style2">บันทึกการรักษา โรคทั่วไป การถ่ายพยาธิ การฉีดวัคซีน ของโค</p></div>
    <div className="col-md box-bg"><img src={cow5} alt="cow5" className="img5-box" ></img> <p  className="box-style1">แจ้งเตือนกิจกรรมต่าง ๆ</p>       <p className="box-style2">แจ้งเตือนวันที่ สำหรับดำเนินกิจกรรมต่าง ๆ ให้ผู้ใช้ได้รับทราบ </p></div>
    <div className="col-md box-bg"><img src={cow6} alt="cow6" className="img6-box" ></img> <p  className="box-style1">ออกรายงาน</p>                <p className="box-style2">ออกรายงาน และแสดงข้อมูลสถิติ </p></div>
</div>
</div>





    <div className="row footer-padding container-fluid">
            <div className="col-md-4"><h3>ผู้พัฒนา</h3><ul><li>นายกิตติวัฒน์ ศรีชัยพล</li><li>นายไชยวัฒน์  อธิกรม</li></ul></div> 
            <div className="col-md-4"><h3>ที่ปรึกษา</h3><ul><li>ดร.ภูวิศสรณ์ ภูมิสรณคมณ์</li></ul></div> 
            <div className="col-md-4"><h3>ติดต่อได้ที่</h3><ul><li>0928412006</li></ul></div>
          </div>
*/