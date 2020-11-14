//โมดูลการรักษา
import React, { Component } from "react";
import HeaderLogin from "./../../../HeaderLogin";
import NavbarLogin from "./../../../demo";
import PaperUser from "./PaperUser2";
import firebase from "./../../../backEnd/firebase";
import axios from "axios";
import Footerversion from "./../../../footerversion";

class Paperuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      loading: false,
      data: [],
      employeeData:[],
      employeeKey:[],
      UIDowner:"",
    };
  }
  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios
          .get("https://aipcattle.herokuapp.com/user/profile/" + user.email)
          .then(res => {
            this.setState({
              data: res.data,
              UID: res.data.user,
              UIDowner:res.data.privilege==="เจ้าของฟาร์ม"?res.data.user:res.data.adminfarm
              
            });
          }).then(()=>{
            axios
            .get("https://aipcattle.herokuapp.com/user/checkemployee/" +this.state.UIDowner).then(res=>{
                this.setState({...this.state,loading: false, employeeData:res.data[1],employeeKey:res.data[0]})
            })
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
