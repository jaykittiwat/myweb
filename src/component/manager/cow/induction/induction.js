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
            this.setState({ ...this.state, UID: res.data[0].user })
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
                
                const listInduction = [];
               res.data.map(list => {
                  if (list.type==="เหนี่ยวนำกลับสัด") {
                    listInduction.push(list);
                  }
                
                });
                return listInduction;
              })
              .then(lists => {
                const id_cattle = []
                lists.map(n =>
                  id_cattle.push(n)
                )
                return id_cattle;
              }).then(idCattle => {
              //console.log(idCattle)
                let list=[];
              for(let i=0;i<idCattle.length;i++){
               axios.get("http://localhost:4000/cattle/show/" + this.state.UID + "/"+idCattle[i].id_cattle).then(res=>{
                console.log(res.data)
              })

              }
              
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
      <TableInduction posts={this.state}/>
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


//axios.get("http://localhost:4000/cattle/show/" + this.state.UID + "/"+n.id_cattle)