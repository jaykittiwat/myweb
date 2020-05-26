import React from "react";
import Signout from "./Signout";
import "./styleNavbar.css";
import { Link } from "react-router-dom";
//react------ HOOK
export default function NavbarLogin() {
  return (
    <div className="container-fluid">
      <nav className="row">
        
        <div className="dropdown">
          <Link to="/login">
            {" "}
            <div className="dropbtn">หน้าหลัก</div>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/regiscow">
            <div className="dropbtn">ลงทะเบียนโค</div>
          </Link>
        </div>

        <div className="dropdown">
          <div className="dropbtn">การจัดการแม่พันธุ์โค</div>
          <div className="dropdown-content">
            <Link to="/fatten">
              <div>บันทึกการบำรุง</div>
            </Link>
            <Link to="/induction">
              <div>บันทึกการเหนี่ยวนำ</div>
            </Link>
            <Link to="/breed">
              <div>บันทึกการผสมพันธุ์</div>
            </Link>
            <Link to="/checkup">
              <div>บันทึกการตรวจท้อง</div>
            </Link>
            <Link to="/calve">
              <div>บันทึกการคลอดลูก</div>
            </Link>
            <Link to="/abortion">
              <div>บันทึกการแท้งลูก</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">การจัดการลูกโค</div>
          <div className="dropdown-content">
            <Link to="/dehorner">
              <div>บันทึกการสูญเขา</div>
            </Link>
            <Link to="/wean">
              <div>บันทึกการหย่านม</div>
            </Link>
            <Link to="/hitnumber">
              <div>บันทึกการตีเบอร์</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/treatment">
            <div className="dropbtn">บันทึกการรักษา</div>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/notification">
            <div className="dropbtn">การแจ้งเตือน</div>
          </Link>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตรวจสอบข้อมูลและออกรายงาน</div>
          <div className="dropdown-content">
            <Link to="/checkinformation">
              <div>ตรวจสอบข้อมูล</div>
            </Link>
            <Link to="/report">
              <div>ออกรายงาน</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตั้งค่าระบบฟาร์ม</div>
          <div className="dropdown-content">
            <Link to="/brandsetting">
              <div>ตั้งค่าแบรนด์</div>
            </Link>
            <Link to="/usersetting">
              <div>ตั้งค่าข้อมูลผู้ใช้</div>
            </Link>
            <Link to="/farmsetting">
              <div>ตั้งค่าระบบฟาร์ม</div>
            </Link>
            <Link to="/drugsetting">
              <div>ตั้งค่าระบบยา</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/instructionmanualn">
            <div className="dropbtn">คู่มือการใช้งาน</div>
          </Link>
        </div>

        <div className="col-md-2">

</div>
        <div className="col-md-1 floatRight  ">
        <div >
            
            <div className=" floatRight sigOut-color"  >Account : kittiwat</div>    
       </div>
        </div>
       

        <div className="col floatRight sigout-div ">
          <Signout />
        </div>
      </nav>
    </div>
  );
}
