import React, { Component } from "react";
import HeaderLogin from "./../../../HeaderLogin";
import NavbarLogin from "./../../../demo";
import Tablecalf from "./newtablecalf";
import firebase from "./../../../backEnd/firebase";
import axios from "axios";
import Footerversion from "./../../../footerversion";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      UID: "",
      fname: "",
      lastname: "",

      data: [],
      databranding: [],
      datadishorn: [],
      datawean: [{},{},{}],

      keyData: [],
      keybranding: [],
      keydishorn: [],
      keywean: [],
      privilege:false
    };
  }
  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        axios
          .get("https://aipcattle.herokuapp.com/user/logIn/" + user.email)
          .then((res) => {
            this.setState({
              ...this.state,
              UID:res.data[0].privilege==="เจ้าของฟาร์ม"?res.data[0].user:res.data[0].adminfarm,
              fname: res.data[0].fname,
              lastname: res.data[0].lname,
              privilege:res.data[0].privilege==="พนักงานฟาร์ม"?true:false 
            });
           
           
          })
          .then(() => {
            axios
              .get("https://aipcattle.herokuapp.com/calf/calfshowAll/" + this.state.UID)
              .then((res) => {
                this.setState({
                  ...this.state,
                  data: res.data[1],
                  keyData: res.data[0],
                });
              })
              .then(() => {
                axios
                  .get("https://aipcattle.herokuapp.com/dishorn/" + this.state.UID)
                  .then((res) => {
                    this.setState({
                      ...this.state,
                      datadishorn: res.data[1],
                      keydishorn: res.data[0],
                    });
                  })
                  .then(() => {
                    axios
                      .get("https://aipcattle.herokuapp.com/branding/" + this.state.UID)
                      .then((res) => {
                        this.setState({
                          ...this.state,
                          databranding: res.data[1],
                          keybranding: res.data[0],
                          
                        });
                      })
                      .then(() => {
                        axios
                          .get("https://aipcattle.herokuapp.com/wean/" + this.state.UID)
                          .then((res) => {
                           // console.log(res.data[1]);
                            this.setState({
                              ...this.state,
                              datawean:res.data[1],
                              keywean: res.data[0],
                              loading: false,
                            });
                          })
                          .then(() => {
                           // console.log(this.state);
                          });
                      });
                  });
              });
          });
      }
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <HeaderLogin />
        <div className="row Nav-shadow posi ">
          <NavbarLogin />
        </div>
        <Tablecalf posts={this.state} />
        <Footerversion />
      </div>
    );
  }
}
export default Notification;

