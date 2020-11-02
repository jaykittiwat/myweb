import React, { Component } from "react";
import HeaderLogin from "./../../../HeaderLogin";
import NavbarLogin from "./../../../demo";
import PaperBrand from "./PaperBrand";
import firebase from "./../../../backEnd/firebase";
import axios from "axios";
import Footerversion from "./../../../footerversion";


class Paperbrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      loading: false,
      data: [{}],
      key: [{}]
    };
    
  }
  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios
          .get("http://localhost:24559/user/logIn/" + user.email)
          .then(res => {
            this.setState({ ...this.state, UID:res.data[0].privilege==="เจ้าของฟาร์ม"?res.data[0].user:res.data[0].adminfarm  });
          })
          .then(() => {
            axios
              .get("http://localhost:24559/settingbrand/brand/" + this.state.UID)
              .then(res => {   
                const key = Object.keys(res.data);
                const data = Object.values(res.data);
                const keyset = [];
                const dataset = [];
                const array = [keyset, dataset];
                for (let i = 0; i < data.length; i++) {
                  keyset.push(key[i]);
                  dataset.push(data[i]);
                }
                return array;
              })
              .then(array => {
                this.setState({ ...this.state,data:array[1],key:array[0],loading:false});
              })
          });
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
        <PaperBrand posts={this.state} />
        <Footerversion/>
      </div>
    );
  }
}
export default Paperbrand;
