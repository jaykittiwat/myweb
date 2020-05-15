import React from "react";
//import { Button } from "react-bootstrap";
import "./styleNavbar.css";
import {Link} from "react-router-dom";
import Singout from './Signout';
//react------ HOOK
export default function NavbarLogin() {
 

  return (
    <div className="container-fluid">

      <nav className="row">
        <div className="dropdown">
          <div className="dropbtn">หน้าหลัก</div>
          <div className="dropdown-content">
            <a href="/login">Link 1</a>
            <a href="#2">Link 2</a>
            <a href="#3">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ลงทะเบียนโค</div>
          <div className="dropdown-content">
            <a href="#1">Link 1</a>
            <a href="#3">Link 2</a>
            <a href="#2">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">จัดการแม่พันธุ์โค</div>
          <div className="dropdown-content">
            <Link to="/letsgo">กดดิ</Link>
            <a href="#3">Link 2</a>
            <a href="#2">Link 3</a>
            <a href="#1">Link 1</a>
            <a href="#3">Link 2</a>
            <a href="#2">Link 3</a>
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
        <Singout/>
          </div>
       
      </nav>
  
    </div>
  );
}
