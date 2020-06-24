import React, { Component } from "react";
import axios from "axios";
import TableFatter from "./TableFatter";
import HeaderLogin from "./../../../../HeaderLogin";
import NavbarLogin from "../../../../Navbar";

import "./../CowStyle.css";



class Fatten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      loading: false
    };
  }

  async componentDidMount () {
    this.setState({ posts: [], loading: true });
    await axios.get(
      "http://localhost:4000/user/cow/fatten/Usertest01"
    ).then(res=>{
      this.setState({ post:res.data, loading: false });
       console.log(res);
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
        </div>
      <TableFatter posts={this.state}/>
        <div className="row mar"></div>
      </div>
    );
  }
}

export default Fatten;
//<Table posts={this.state.posts} loading={this.state.loading} />
