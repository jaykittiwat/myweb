import React, { Component } from "react";
import axios from "axios";
import TableFatter from "./TableFatter";
import HeaderLogin from "./../../../../HeaderLogin";
import NavbarLogin from "../../../../Navbar";
import firebase from "./../../../../backEnd/firebase";
import "./../CowStyle.css";



class Fatten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
    };
  }

  componentDidMount () {
    this.setState({...this.state,loading:true})
  firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios.get("http://localhost:4000/user/logIn/" + user.email).then(res=>{
            return res.data[0].user
        }).then(resEmail=>{
          axios.get(
              "http://localhost:4000/cattle/show/"+resEmail
            ).then(res=>{
          
              this.setState({posts:res.data,loading:false})}).then(()=>console.log(this.state.posts))
        })
      }
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
      <TableFatter posts={this.state}/>
        <div className="row mar"></div>
      </div>
    );
  }
}

export default Fatten;
//<Table posts={this.state.posts} loading={this.state.loading} />
