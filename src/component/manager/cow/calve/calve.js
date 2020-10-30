import React, { Component } from "react";
import axios from "axios";
import TableClave from "./tableClave";
import HeaderLogin from "./../../../../HeaderLogin";
import NavbarLogin from "../../../../demo";
import firebase from "./../../../../backEnd/firebase";
import "./../CowStyle.css";
import Footerversion from "./../../../../footerversion";

class CheckUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keydata: [],
      data: [],
      loading: false,
      keysDate: [],
      dataNoti: [],
      UID: "",
      databreed:[],
      fname:""
    };
  }

  componentDidMount() {
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios
          .get("http://localhost:4000/user/logIn/" + user.email)
          .then(res => {
            
            this.setState({ ...this.state, UID:res.data[0].privilege==="เจ้าของฟาร์ม"?res.data[0].user:res.data[0].adminfarm,fname:res.data[0].fname });
            
          })
          .then(() => {
            
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
            var fullToday =yyyy+"-"+mm+"-"+dd;
            axios
              .get(
                "http://localhost:4000/notification/" +
                 this.state.UID +
                  "/" +
                  fullToday
              )
              .then(res => {
                const key = Object.keys(res.data);
                const data = Object.values(res.data);
                  //console.log(key);
                  //console.log(data);
                const keyInduction = [];
                const dataInduction = [];
                const array = [keyInduction, dataInduction];
                for (let i = 0; i < data.length; i++) {
                  if (data[i].type === "วันคลอด") {
                   
                    keyInduction.push(key[i]);
                    dataInduction.push(data[i]);
                  }
                }
                return array;
              }).then((array)=>{
                this.setState({
                  ...this.state,
                  keysDate: array[0],
                  dataNoti: array[1]
                });
              }).then(async()=>{
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
              }).then((data)=>{
                //console.log(data)
                const setdata = [];
                const setKeyCattle = [];
                for (let i = 0; i < data.length; i++) {
                  const values = Object.keys(data[i]);
                  const dataOneCatle = Object.values(data[i]);
                  const set = Object.assign.apply({}, dataOneCatle);
                  setdata.push(set);
                  setKeyCattle.push(values[0]);
                }
              this.setState({...this.state,keydata:setKeyCattle,data:setdata,loading:true})
              }).then( async() => {
                const databreed=[]
                for(let i=0;i<this.state.dataNoti.length;i++){
                  const id_cattle=this.state.dataNoti[i].id_cattle
                  const result = await axios.get("http://localhost:4000/breed/" + this.state.UID + "/" + id_cattle)
            databreed.push(result.data)
                }
              return databreed
              }).then((data)=>{
         
                const setdata = [];
                for (let i = 0; i < data.length; i++) {
                  const dataOneCatle = Object.values(data[i]);
                  const set = Object.assign.apply({}, dataOneCatle);
                  setdata.push(set);
                
                }
                return setdata
              }).then((setdata)=>{
                this.setState({...this.state,databreed:setdata,loading:false})
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
        <TableClave  posts={this.state}/>
        <div className="row mar"></div>
        <Footerversion/>
      </div>
    );
  }
}

export default CheckUp;
