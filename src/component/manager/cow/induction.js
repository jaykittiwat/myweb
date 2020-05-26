import React from "react";


import HeaderLogin from "../../../HeaderLogin";
import NavbarLogin from "../../../Navbar";
//import { Form, Col, Button } from "react-bootstrap";
import "./CowStyle.css";

export default function Induction() {
  

  return (
    <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow">
        <NavbarLogin />
      </div>
     
           

      <div className="row mar"></div>
    </div>
  );
}
/*
 https://mdbootstrap.com/docs/react/tables/datatables/

//npm install  mdbreact
//น่าจะเอาไว้รับผลมั้ง <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result>
 */
