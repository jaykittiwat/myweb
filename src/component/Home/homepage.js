import React, { Component } from "react";
import HeaderLogin from "./../../HeaderLogin";
import "./styh.css";
import NavbarLogin from "./../../demo";
import Footerversion from "./../../footerversion";
import axios from "axios";
import firebase from "./../../backEnd/firebase";
//import Board from "./dashboard";
import Walpaper from "./walpaper";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      param: this.props,
      imgeUser: ""
    };
  }

  async componentDidMount() {
    await axios
      .get(
        "http://localhost:4000/user/logIn/" + this.state.param.currentUser.email
      )
      .then(res => {
        const getUser = res.data[0];
        this.setState({ ...this.state, user: getUser });
      })
      .then(() => {
        firebase
          .storage()
          .ref(
            "/Photo/" +
              this.state.user.user +
              "/photoUser/" +
              this.state.user.user +
              ".jpg"
          )
          .getDownloadURL()
          .then(url => {
            this.setState({ ...this.state, imgeUser: url });
          }).then(()=>{
            //console.log(this.state.user)
          })
      });
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="row ">
          <HeaderLogin />
        </div>
        <div className="row Nav-shadow posi">
          <NavbarLogin />
        </div>
        <div className="row ">
        <Walpaper/>
        </div>
         
      
        
<Footerversion/>
        
      </div>
    );
  }
}
export default Home;
/* */