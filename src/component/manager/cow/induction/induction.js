import React, { Component } from "react";
import axios from "axios";
import TableInduction from "./tableintrution";
import HeaderLogin from "./../../../../HeaderLogin";
import NavbarLogin from "../../../../demo";
import firebase from "./../../../../backEnd/firebase";
import "./../CowStyle.css";
import Footerversion from "./../../../../footerversion";

class Induction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keydata:[],
      data: [],
      loading: false,
      keysDate: [],
      dataNoti: [],
      UID: "",
      fname:"",
      program_sync:[]
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios
          .get("http://localhost:4000/user/logIn/" + user.email)
          .then(res => {
            this.setState({ ...this.state, UID: res.data[0].user,fname:res.data[0].fname  });
            return res.data[0].user;
          })
          .then(resEmail => {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();
            if (mm < 10) {
              mm = "0" + mm;
            }
            if (dd < 10) {
              dd = "0" + dd;
            }
            var fullToday = yyyy + "-" + mm + "-" + dd;

            axios
              .get(
                "http://localhost:4000/notification/" +
                  resEmail +
                  "/" +
                  fullToday
              )
              .then(res => {
              
                const key = Object.keys(res.data);
                const data = Object.values(res.data);
                const keyInduction = [];
                const dataInduction = [];
                const array = [keyInduction, dataInduction];
                for (let i = 0; i < data.length; i++) {
                  if (data[i].type === "เหนี่ยวนำกลับสัด") {
                    keyInduction.push(key[i]);
                    dataInduction.push(data[i]);
                  }
                }
                return array;
              })
              .then(array => {
                this.setState({
                  ...this.state,
                  keysDate: array[0],
                  dataNoti: array[1]
                });
              })
              .then(async () => {
                const cattleListData = [];
                for (let i = 0; i < this.state.keysDate.length; i++) {
                  let res = await axios.get(
                    "http://localhost:4000/cattle/show/" +
                      this.state.UID +
                      "/" +
                      this.state.dataNoti[i].id_cattle
                  );
                  cattleListData.push(res.data);
                }
                return cattleListData;
              })
              .then(data => {
                const setdata = [];
                const setKeyCattle = [];
               
                for (let i = 0; i < data.length; i++) {
                  const values = Object.keys(data[i]);
                  const dataOneCatle = Object.values(data[i]);
                  const set = Object.assign.apply({}, dataOneCatle);   
                  setdata.push(set);
                  setKeyCattle.push(values[0]);
                }
              this.setState({...this.state,keydata:setKeyCattle,data:setdata})
              }).then(()=>{
                axios.get(
                  "http://localhost:4000/settingprogram_sync/program_sync/" + this.state.UID
                ).then(res=>{
                  this.setState({...this.state,program_sync:res.data[1],loading:false})
                })
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
        <TableInduction posts={this.state} />
        <div className="row mar"></div>
        <Footerversion/>
      </div>
    );
  }
}

export default Induction;
