//โมดูลการรักษา
import React, { Component } from "react";
import HeaderLogin from "./../../../HeaderLogin";
import NavbarLogin from "./../../../Navbar";
import PaperFarm from "./PaperFarm";
import firebase from "./../../../backEnd/firebase";
import axios from "axios";

class Paperfarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentDidMount() {

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
        <PaperFarm posts={this.state} />
      </div>
    );
  }
}
export default Paperfarm;
