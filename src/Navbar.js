import React from "react";
import  Signout from "./Signout";
import "./styleNavbar.css";
//react------ HOOK
export default function NavbarLogin() {
 

  return (
    <div className="container-fluid">
      <nav className="row">
        <div className="dropdown">
          <div className="dropbtn">หน้าหลัก</div>
          <div className="dropdown-content">
            <a href="/login">login</a>
            <a href="#2">Link 2</a>
            <a href="#3">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ลงทะเบียนโค</div>
          <div className="dropdown-content">
            <a href="/regiscow">บันทึกพันธุ์ประวัติโค</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">การจัดการแม่พันธุ์โค</div>
          <div className="dropdown-content">
            <a href="/fatten">บันทึกการบำรุง</a>
            <a href="/induction">บันทึกการเหนี่ยวนำ</a>
            <a href="/breed">บันทึกการผสมพันธุ์</a>
            <a href="/checkup">บันทึกการตรวจท้อง</a>
            <a href="/calve">บันทึกการคลอดลูก</a>
            <a href="/abortion">บันทึกการแท้งลูก</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">การจัดการลูกโค</div>
          <div className="dropdown-content">
            <a href="/dehorner">บันทึกการสูญเขา</a>
            <a href="/wean">บันทึกการหย่านม</a>
            <a href="/hitnumber">บันทึกการตีเบอร์</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">บันทึกการรักษา</div>
          <div className="dropdown-content">
            <a href="/treatment">บันทึกการรักษา</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">การแจ้งเตือน</div>
          <div className="dropdown-content">
            <a href="/notification">การแจ้งเตือน</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตรวจสอบข้อมูลและออกรายงาน</div>
          <div className="dropdown-content">
            <a href="/checkinformation">ตรวจสอบข้อมูล</a>
            <a href="/report">ออกรายงาน</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตั้งค่าระบบฟาร์ม</div>
          <div className="dropdown-content">
            <a href="/brandsetting">ตั้งค่าแบรนด์</a>
            <a href="/usersetting">ตั้งค่าข้อมูลผู้ใช้</a>
            <a href="/farmsetting">ตั้งค่าระบบฟาร์ม</a>
            <a href="/drugsetting">ตั้งค่าระบบยา</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">คู่มือการใช้งาน</div>
          <div className="dropdown-content">
            <a href="/instructionmanual">คู่มือการใช้งาน</a>
          </div>
          
        </div>
        <div className="col floatRight">
           <Signout/>
           </div>
       
      </nav>
    </div>
  );
}