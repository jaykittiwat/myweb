import React, { Component } from "react";
import HeaderLogin from "./../../HeaderLogin";
import "./styh.css";
import NavbarLogin from "./../../demo";
import Footerversion from "./../../footerversion";
import axios from "axios";
import Walpaper from "./walpaper";
import  firebase from "./../../backEnd/firebase/index"
import { Button } from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      param: this.props,
      imgeUser: "",
      statusUser:"",
      admin:""
    };
  }

  async componentDidMount() {
    await axios
      .get(
        "http://localhost:4000/user/logIn/" + this.state.param.currentUser.email
      )
      .then(res => {
        const getUser = res.data[0];
        console.log(getUser);
        this.setState({ ...this.state, user: getUser,statusUser:getUser.privilege,admin:getUser.adminfarm });
      })
      
      
          
    
  }
  logout = e => {
    
    firebase.auth().signOut()
    window.location.reload()
  ;
    
  
  };
  render() {
    if(this.state.statusUser==="ยังไม่ได้อนุมัติ"){
      return (
        <div className="container-fluid " style={{textAlign:"center"}}>
     <div style={{fontSize:"40px",marginTop:"10%"}} >รอ<span style={{color:"blue"}}> {this.state.admin}</span> ทำการอนุมัติ</div>
     <div style={{fontSize:"40px"}} >กรุณากลับมาใหม่ในภายหลัง</div>
     <Button style={{fontSize:"40px"}} variant="text" onClick={()=>this.logout()} color="secondary">ออกจากระบบ</Button>
          </div>
      )
    }

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