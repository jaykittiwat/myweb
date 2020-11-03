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
      owner:""
     
    };
    
  }
  componentDidMount(){
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        axios
          .get("https://aipcattle.herokuapp.com/user/logIn/" + user.email)
          .then(res => {
            this.setState({ ...this.state, UID:res.data[0].privilege==="เจ้าของฟาร์ม"?res.data[0].user:res.data[0].adminfarm ,owner:res.data[0].fname+ ' '+res.data[0].lname });
          }).then( async()=>{
           const datacattle = await axios.get("https://aipcattle.herokuapp.com/cattle/showAll/" +this.state.UID)
           const datacalf = await axios.get("https://aipcattle.herokuapp.com/calf/calfshowAll/" +this.state.UID)
           this.setState({...this.state,datacattle:datacattle.data[1],keycattle:datacattle.data[0],datacalf:datacalf.data[1],keycalf:datacalf.data[0],loading:false})
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
