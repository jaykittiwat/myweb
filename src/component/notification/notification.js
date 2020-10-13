import React, { Component } from "react";
import HeaderLogin from "./../../HeaderLogin";
import NavbarLogin from "./../../demo";
import PaperNotificaion from "./paper";
import firebase from '../../backEnd/firebase'
import axios from 'axios'
import Footerversion from "./../../footerversion";

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
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios
          .get("http://localhost:4000/user/logIn/" + user.email)
          .then(res => {
            this.setState({ ...this.state, UID: res.data[0].user });
            return res.data[0].user;
          }).then(async(UID)=>{
        
          const result =await axios.get("http://localhost:4000/notification/notiAll/"+UID )
          const result2 =await axios.get("http://localhost:4000/treatment/notiAll/"+UID )
          const data1 = Object.values(result.data);
          const data2 = Object.values(result2.data);
          const data=data1.concat(data2)
                this.setState({...this.state,dataNoti:data,loading:false})
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
        <PaperNotificaion  posts={this.state}/>
        <Footerversion/>
      </div>
    );
  }
}
export default Notification;
