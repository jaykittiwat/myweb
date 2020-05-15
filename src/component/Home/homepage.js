import React, { Component } from "react";
//import firebase from "./../../backEnd/firebase/index";
//import { Button, Navbar, Nav, NavDropdown,Dropdown } from "react-bootstrap";
import HeaderLogin from "./../../HeaderLogin";

import NavbarLogin from './../../Navbar';
//import { Button,Nav,NavDropdown,Navbar,ListGroup } from "react-bootstrap";
//import axios from "axios";
// หน้า login แล้ว
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      param: "show"
    };
  }

  

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
             
             <div className='row '>
           
            <NavbarLogin/>
            
            
                </div>

         
          </div>

          

    );
  }
}
export default Home;
/* */