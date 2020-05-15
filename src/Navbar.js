import React from "react";
import { Button } from "react-bootstrap";
import firebase from "./backEnd/firebase/index";
import "./styleNavbar.css";
//react------ HOOK
export default function NavbarLogin() {
  const logout = e => {
    //console.log("Logout");
    firebase.auth().signOut();
    window.location.reload();
  };

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
          <div className="dropbtn">จัดการแม่พันธุ์โค</div>
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
          <div className="dropbtn">บันทึกจัดการลูกโค</div>
          <div className="dropdown-content">
            <a href="#1">Link 1</a>
            <a href="#3">Link 2</a>
            <a href="#2">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">บันทึกการรักษา</div>
          <div className="dropdown-content">
            <a href="#1">Link 1</a>
            <a href="#3">Link 2</a>
            <a href="#2">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">แจ้งเตือน</div>
          <div className="dropdown-content">
            <a href="#1">Link 1</a>
            <a href="#3">Link 2</a>
            <a href="#2">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตรวจสอบข้อมูลและออกรายงาน</div>
          <div className="dropdown-content">
            <a href="#1">Link 1</a>
            <a href="#3">Link 2</a>
            <a href="#2">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตั้งค่าระบบฟาร์ม</div>
          <div className="dropdown-content">
            <a href="#1">Link 1</a>
            <a href="#3">Link 2</a>
            <a href="#2">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">คู่มือการใช้งาน</div>
          <div className="dropdown-content">
            <a href="#1">Link 1</a>
            <a href="#3">Link 2</a>
            <a href="#2">Link 3</a>
          </div>
        </div>
        
             <div className="  col floatRight">
                 <Button className=" floatRight" variant='danger' onClick={logout} >ออกจากระบบ</Button>
            </div>
       
      </nav>
    </div>
  );
}
