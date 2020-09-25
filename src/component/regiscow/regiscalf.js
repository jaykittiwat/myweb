import React, { Component } from "react";
import HeaderLogin from "./../../HeaderLogin";
import NavbarLogin from "./../../demo";
import FromRegiscalf from "./FormRegiscalf";
import axios from "axios";
import firebase from "../../backEnd/firebase";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      loading:false,
      color:[],
      strian:[]
    };
  }
  componentDidMount(){
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        axios
        .get("http://localhost:4000/user/logIn/" + user.email).then(res=>{
          this.setState({...this.state,UID: res.data[0].user });
        }).then(()=>{
          axios.get("http://localhost:4000/settingcolor/color/"+this.state.UID).then(res=>{
            this.setState({...this.state,color:res.data[1] });
          }).then(()=>{
            axios.get("http://localhost:4000/settingstrian/strian/"+this.state.UID).then(res=>{
              this.setState({...this.state,strian:res.data[1],loading:false });
            }).then(()=>{
              console.log(this.state);
            })
          })
        })
      }
    })
  }
  render() {
    return (
      <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div >
      <FromRegiscalf posts={this.state} />
    </div>
    );
  }
}
export default Header;
