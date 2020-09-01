//โมดูลการรักษา
import React, { Component } from "react";
import HeaderLogin from "./../../../HeaderLogin";
import NavbarLogin from "./../../../Navbar";
import PaperUser from "./PaperUser";
import firebase from "./../../../backEnd/firebase";
import axios from "axios";
import Footerversion from "./../../../footerversion";

class Paperuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      loading: false,
      data: []
    };
  }
  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios
          .get("http://localhost:4000/user/profile/" + user.email)
          .then(res => {
            this.setState({
              data: res.data,
              UID: res.data.user,
              loading: false
            });
          })
      }
      else{ console.log("log out")}
       
      
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row ">
          <HeaderLogin />
        </div>
        <div className="row Nav-shadow posi">
          <NavbarLogin />
        </div>
        <PaperUser posts={this.state} />
        <Footerversion/>
      </div>
    );
  }
}
export default Paperuser;
