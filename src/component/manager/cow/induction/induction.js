import React, { Component } from "react";
import axios from "axios";
import TableInduction from "./tableintrution";
import HeaderLogin from "./../../../../HeaderLogin";
import NavbarLogin from "../../../../Navbar";
import firebase from "./../../../../backEnd/firebase";
import "./../CowStyle.css";

class Induction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: false,
      keysDate:[],
      dataNoti:[],
      UID: ""
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
               /* console.log("---------------โคที่ยังไม่ได้บันทึกข้อมูลตามกำหนด-----------------")
                
                console.log("---------------คีย์ ของnotification ของโคแต่ละตัว-----------------")    
                console.log(Object.keys(res.data))  
                console.log(Object.values(res.data))  */
              

                let key=Object.keys(res.data);
                let list = Object.values(res.data);
                this.setState({...this.state,dataNoti:list,keysDate:key})
                return list;
                
              }).then(async (list)=>{
                /*console.log("---------------values การแจ้งเตือนแต่ละตัว(เอาไปดึงข้อมูลในcattle)-----------------")   */ 
                console.log(list)               
                //ดึงข้อมูลโค
                const cattleListData=[]
                for(let i=0;i<list.length;i++){
                let res= await axios.get("http://localhost:4000/cattle/show/"+this.state.UID+"/"+list[i].id_cattle)
                cattleListData.push(res.data)
                }
               return cattleListData
              }).then(cattleListData=>{
                console.log(cattleListData)
                const setPost = Object.assign.apply({}, cattleListData)
                this.setState({...this.state,posts:setPost,loading:false})
              }).then(()=>{
                //console.log(this.state.posts)
                //console.log(this.state.keysDate)
                //console.log(this.state.dataNoti)
              }
              )
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
      </div>
    );
  }
}

export default Induction;

//<TableInduction posts={this.state}/>
// var list = [];
/*snapshot.forEach(elem => {
  list.push(elem.val());
});
res.json(list) /*/

//axios.get("http://localhost:4000/cattle/show/"+resEmail+"/pc 01").then(res=>{ })


/*  if(cattleListData.length===list.length){

                } */
                


                /*
                
                
                .then(()=>{
                  console.log("---------------ดึงข้อมูลจาก cattle-----------------")  
                  console.log(cattleListData)
                  const setPost = Object.assign.apply({}, cattleListData)
                  this.setState({...this.state,posts:setPost,loading:false})
                }).then(()=>{
                  //console.log(this.state.posts)
                })
                
                
                
                */