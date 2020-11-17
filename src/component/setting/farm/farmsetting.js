//โมดูลการรักษา
import React, { Component } from "react";
import HeaderLogin from "./../../../HeaderLogin";
import NavbarLogin from "./../../../demo";
import PaperFarm from "./PaperFarmNew2";
import firebase from "./../../../backEnd/firebase";
import axios from "axios";

import Footerversion from "./../../../footerversion";

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
          .get("https://aipcattle.herokuapp.com/user/logIn/" + user.email)
          .then(res => {
            this.setState({ ...this.state,  UID:res.data[0].privilege==="เจ้าของฟาร์ม"?res.data[0].user:res.data[0].adminfarm });
          })
          .then(async () => {
            const bigco = await axios.get(
              "https://aipcattle.herokuapp.com/settingbigcorral/bigcorral/" +
                this.state.UID
            );
            const cor = await axios.get(
              "https://aipcattle.herokuapp.com/settingcorral/corral/" + this.state.UID
            );
            const herd = await axios.get(
              "https://aipcattle.herokuapp.com/settingherd_num/herd_num/" + this.state.UID
            );
            const col = await axios.get(
              "https://aipcattle.herokuapp.com/settingcolor/color/" + this.state.UID
            );
            const str = await axios.get(
              "https://aipcattle.herokuapp.com/settingstrian/strian/" + this.state.UID
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
        <PaperFarm posts={this.state} storage={localStorage.getItem('selectSettingFarm')||""} />
        <div className="row mar"></div>
        <Footerversion/>
      </div>
    );
  }
}
export default Paperfarm;
