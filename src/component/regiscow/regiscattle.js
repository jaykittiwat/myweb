import React, { Component } from "react";
import HeaderLogin from "./../../HeaderLogin";
import NavbarLogin from "./../../demo";
import FromRegiscattle from "./FormRegiscattle";
import axios from "axios";
import firebase from "../../backEnd/firebase";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      loading:false,
      color:[],
      strian:[],
      bigcorral:[],
      corral:[],
      herd_no:[]
    };
  }
  componentDidMount(){
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        axios
        .get("http://localhost:4000/user/logIn/" + user.email).then(res=>{
          this.setState({...this.state,UID: res.data[0].user });
        }).then(()=>{
          axios.get("http://localhost:4000/settingcolor/color/"+this.state.UID).then(res=>{
            this.setState({...this.state,color:res.data[1] });
          }).then(()=>{
            axios.get("http://localhost:4000/settingstrian/strian/"+this.state.UID).then(res=>{
              this.setState({...this.state,strian:res.data[1]});
            }).then(async ()=>{
              const bc=await axios.get("http://localhost:4000/settingbigcorral/bigcorral/"+this.state.UID)
              const cr=await axios.get("http://localhost:4000/settingcorral/corral/"+this.state.UID)
              const hn=await axios.get("http://localhost:4000/settingherd_num/herd_num/"+this.state.UID)
              
              this.setState({...this.state,bigcorral:bc.data[1],corral:cr.data[1],herd_no:hn.data[1],loading:true})

            })
          })
        })
      }
    })
  }
  render() {
    return (
      <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div >
      <FromRegiscattle posts={this.state} />
    </div>
    );
  }
}
export default Header;
