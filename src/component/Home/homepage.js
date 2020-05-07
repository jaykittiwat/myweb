import React, { Component } from "react";
import firebase from "./../../backEnd/firebase/index";
//import { Button, Navbar, Nav, NavDropdown,Dropdown } from "react-bootstrap";
import HeaderLogin from "./../../HeaderLogin";
import "./style.css";
import { Button } from "react-bootstrap";
//import { Button,Nav,NavDropdown,Navbar,ListGroup } from "react-bootstrap";
//import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      param: "show"
    };
  }

  logout = e => {
    //console.log("Logout");
    firebase.auth().signOut();
    window.location.reload();
  };

  componentDidMount() {
    //const user=firebase.database//อะไรสักอย่าง
    /*axios
      .get("http://localhost:4000/"+this.state.param)
      .then(res => {
        const users = res.data;
        this.setState({ user:users });
      })
      .then(res => {
        console.log(this.state.user);
      });*/
  }

  render() {
    return (
      <div className="container-fluid">
             <div className="row">
          <HeaderLogin />
        </div>
             
             <div className='row'>
             <nav className='container-fluid'>
                    <ul>
                      <li><a href="#1">หน้าหลัก</a></li>
                      <li><a href="#2">ลงทะเบียนโค</a>
                    <ul>
                      <li><a href="#1">Python</a></li>
                      <li><a href="#2">JavaScrip</a></li>
                      <li><a href="#2">JQuery</a></li>
                    </ul>
                    </li>
                    <li><a href="#2">จัดการแม่พันธุ์ </a>
                    <ul>
                      <li><a href="#1">Front End</a></li>
                      <li><a href="#1">Back End</a></li>
                      <li><a href="#1">Others  </a>
                    </li>
                    </ul>
                    </li>
                    <li><a href="#2">จัดการลูกโค </a>
                    <ul>
                      <li><a href="#1">Front End</a></li>
                      <li><a href="#1">Back End</a></li>
                      <li><a href="#1">Others  </a>
                    </li>
                    </ul>
                    </li>

                    <li><a href="#2">การรักษา </a>
                    <ul>
                      <li><a href="#1">Front End</a></li>
                      <li><a href="#1">Back End</a></li>
                      <li><a href="#1">Others  </a>
                    </li>
                    </ul>
                    </li>

                    <li><a href="#2">ตรวจสอบข้อมูลและออกรายงาน </a>
                    <ul>
                      <li><a href="#1">Front End11111111111111</a></li>
                      <li><a href="#1">Back End</a></li>
                      <li><a href="#1">Others  </a>
                    </li>
                    </ul>
                    </li>

                    <li><a href="#2">ตั้งค่าฟาร์ม</a>
                    <ul>
                      <li><a href="#1">Front End</a></li>
                      <li><a href="#1">Back End</a></li>
                      <li><a href="#1">Others  </a>
                    </li>
                    </ul>
                    </li>

                    <li><a href="#2">คู่มือการใช้งาน</a>
                    <ul>
                      <li><a href="#1">Front End</a></li>
                      <li><a href="#1">Back End</a></li>
                      <li><a href="#1">Others  </a>
                    </li>
                    </ul>
                    </li>
                    
                    </ul>
                    <div className='floatRight'>
                    <Button variant='danger' onClick={this.logout}>ออกจากระบบ</Button>
                    </div>
                </nav>

                </div>

         
          </div>

          

    );
  }
}
export default Home;
/* */