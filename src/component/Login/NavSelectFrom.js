import React from "react";
//import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './FromStyle.css';
export default function NavFrom() {
  return (
    <div>
     <ul className="nav nav-tabs">
  <li className="nav-item">
  <Link to="/registor"  style={{ textDecoration: 'none' }} ><div className="nav-link ">เจ้าของฟาร์ม</div></Link>
  </li>
  <li className="nav-item">
    <Link to="/registor2"  style={{ textDecoration: 'none' }}  ><div className="nav-link ">พนักงานฟาร์ม</div></Link>
  </li>
  
</ul>
    </div>
  );
}
