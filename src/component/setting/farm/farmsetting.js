//โมดูลการรักษา
import React, { Component } from "react";
import HeaderLogin from "./../../../HeaderLogin";
import NavbarLogin from "./../../../Navbar";
import PaperFarm from "./PaperFarmNew";
import firebase from "./../../../backEnd/firebase";
import axios from "axios";

class Paperfarm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      loading: "",
      Bigcorraldata: [],
      Bigcorralkey: [],
      corraldata: [],
      corralkey: [],
      herddata: [],
      herdkey: [],
      colordata: [],
      colorkey: [],
      striandata: [],
      striankey: []
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
          })
          .then(async () => {
            const bigco = await axios.get(
              "http://localhost:4000/settingbigcorral/bigcorral/" +
                this.state.UID
            );
            const cor = await axios.get(
              "http://localhost:4000/settingcorral/corral/" + this.state.UID
            );
            const herd = await axios.get(
              "http://localhost:4000/settingherd_num/herd_num/" + this.state.UID
            );
            const col = await axios.get(
              "http://localhost:4000/settingcolor/color/" + this.state.UID
            );
            const str = await axios.get(
              "http://localhost:4000/settingstrian/strian/" + this.state.UID
            );
            this.setState({
              ...this.state,
              Bigcorraldata:bigco.data[1],
              Bigcorralkey:bigco.data[0],
              corraldata:cor.data[1],
              corralkey:cor.data[0],
              herddata:herd.data[1],
              herdkey:herd.data[0],
              colordata:col.data[1],
              colorkey: col.data[0],
              striandata:str.data[1],
              striankey: str.data[0],
              loading:false
            });
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
        <PaperFarm posts={this.state} />
      </div>
    );
  }
}
export default Paperfarm;
