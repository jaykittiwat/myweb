import React, { Component } from "react";
import HeaderLogin from "./../../../HeaderLogin";
import NavbarLogin from "./../../../demo";
import Tablecalf from "./newtablecalf";
import firebase from "./../../../backEnd/firebase";
import axios from 'axios'
import Footerversion from "./../../../footerversion";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      UID: "",
      data:[],
      keyData:[]
         };
  }
  componentDidMount() {
    this.setState({...this.state,loading:true})
    firebase.auth().onAuthStateChanged(user=>{
      if(user){
        axios
        .get("http://localhost:4000/user/logIn/" + user.email)
        .then(res => {
        
          this.setState({ ...this.state, UID: res.data[0].user});
          return res.data[0].user;
        }).then((UID)=>{
          axios
        .get("http://localhost:4000/calf/calfshowAll/" + UID).then(res=>{
          this.setState({...this.state,data:res.data[1],keyData:res.data[0],loading:true})
        }).then(()=>{
          console.log(this.state);
        })
        })
      }
    })
    
   
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

