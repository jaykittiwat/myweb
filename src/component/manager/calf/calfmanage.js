import React, { Component } from "react";
import HeaderLogin from "./../../../HeaderLogin";
import NavbarLogin from "./../../../demo";
import Tablecalf from "./newtablecalf";
//import firebase from '../../backEnd/firebase'
//import axios from 'axios'
import Footerversion from "./../../../footerversion";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataNoti: [],
      UID: "",
         };
  }
  componentDidMount() {
   
  }
  render() {
    return (
      <div className="container-fluid">
        <HeaderLogin />
        <div className="row Nav-shadow posi ">
          <NavbarLogin />
        </div>
        <Tablecalf />
        <Footerversion/>
      </div>
    );
  }
}
export default Notification;

