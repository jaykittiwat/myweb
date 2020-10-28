import React, { Component } from "react";
import HeaderLogin from "../../../HeaderLogin";
import NavbarLogin from "../../../demo";
import Showtable from "./table";
import Footerversion from "./../../../footerversion";
import firebase from "./../../../backEnd/firebase";
import axios from "axios";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      loading: false,
      datacattle: [],
      keycattle: [],
      datacalf: [],
      keycalf: [],
      listname:[],
      genListname:[]
    };
    
  }
  componentDidMount(){
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        axios
          .get("http://localhost:4000/user/logIn/" + user.email)
          .then(res => {
            this.setState({ ...this.state, UID: res.data[0].user });
          }).then( async()=>{
           const datacattle = await axios.get("http://localhost:4000/cattle/showAll/" +this.state.UID)
           const datacalf = await axios.get("http://localhost:4000/calf/calfshowAll/" +this.state.UID)
           this.setState({...this.state,datacattle:datacattle.data[1],keycattle:datacattle.data[0],datacalf:datacalf.data[1],keycalf:datacalf.data[0],loading:false})
          }).then(()=>{
            const children = this.state.datacattle.concat(
              this.state.datacalf
            );
            this.setState({ ...this.state,listname: children });
          }).then(()=>{
            const setId = [];
            this.state.listname.map((item) => {
              const validKeys = ["cattle_id", "birth_id"];
              Object.keys(item).forEach(
                (key) => validKeys.includes(key) || delete item[key]
              );
              const key = "birth_id";
              item["cattle_id"] = item[key]
                ? item[key]
                : item["cattle_id"];
              delete item[key];
              setId.push(item);
            });
            this.setState({ ...this.state, genListname: setId });
          })
      }
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <HeaderLogin />
        <div className="row Nav-shadow posi">
          <NavbarLogin />
        </div>
        <Showtable posts={this.state}/>

        <div style={{ height: "30px" }}> </div>
        <Footerversion />
      </div>
    );
  }
}
export default Header;
