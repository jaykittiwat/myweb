import React, { Component } from "react";
import axios from "axios";
import TableFatter from "./TableFatter";
import HeaderLogin from "./../../../../HeaderLogin";
import NavbarLogin from "../../../../demo";
import firebase from "./../../../../backEnd/firebase";
import "./../CowStyle.css";
import Footerversion from "./../../../../footerversion";

class Fatten extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keydata: [],
      data: [],
      loading: false,
      keysDate: [], //key ของ notification
      dataNoti: [], //value ของnotification
      UID: "",
      fname:"",
      pro_maintain:[]
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios
          .get("http://localhost:4000/user/logIn/" + user.email)
          .then(res => {
            this.setState({ ...this.state, UID: res.data[0].user,fname:res.data[0].fname });
            return res.data[0].user;
          })
          .then(() => {
            axios
              .get("http://localhost:4000/cattle/show/" + this.state.UID)
              .then(res => {
                const key = Object.keys(res.data);
                const data = Object.values(res.data);
                const keyInduction = [];
                const dataInduction = [];
                const array = [keyInduction, dataInduction];
                for (let i = 0; i < data.length; i++) {
                  if (
                    data[i].status === "บำรุงแม่พันธุ์" ||
                    data[i].status === "คลอดแล้ว" ||
                    data[i].status === "โคแท้ง" ||
                    data[i].status === "ไม่ท้อง" ||
                    data[i].status === " "
                  ) {
                    keyInduction.push(key[i]);
                    dataInduction.push(data[i]);
                  }
                }
                return(array)
              }).then((array)=>{
                this.setState({
                  ...this.state,
                  keydata: array[0],
                  data: array[1],
                  loading:false
                });
              }).then(()=>{
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
                      this.state.UID +
                      "/" +
                      fullToday
                  ).then((res)=>{
                    const key = Object.keys(res.data);
                    const data = Object.values(res.data);
                    const keyInduction = [];
                    const dataInduction = [];
                    const array = [keyInduction, dataInduction];
                    for (let i = 0; i < data.length; i++) {
                      if (data[i].type === "บำรุงแม่พันธุ์") {
                        keyInduction.push(key[i]);
                        dataInduction.push(data[i]);
                      }
                    }
                    return array;
                  }).then(array=>{
                    this.setState({
                      ...this.state,
                      keysDate: array[0],
                      dataNoti: array[1],
                    
                    });
                    axios.get("http://localhost:4000/settingprogram_maintain/program_maintain/"+this.state.UID).then(res=>{
                      this.setState({
                        ...this.state,
                       loading:false,
                       pro_maintain:res.data[1]
                      });
                    })
                  })
              })
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
        <Footerversion/>
      </div>
    );
  }
}

export default Fatten;
//<Table posts={this.state.posts} loading={this.state.loading} />
