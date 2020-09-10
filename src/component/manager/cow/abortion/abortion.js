import React,{Component} from "react";
import TableAbor from "./tableAbortion";
import HeaderLogin from "../../../../HeaderLogin";
import NavbarLogin from "../../../../demo";
import firebase from "./../../../../backEnd/firebase";
import axios from 'axios';
import Footerversion from "./../../../../footerversion";

class Abortion extends Component{
constructor(props){
  super(props)
  this.state={
      loading:false
  }
}

componentDidMount(){
  this.setState({ ...this.state, loading: true });
  firebase.auth().onAuthStateChanged(user =>{
    if(user){
      axios
      .get("http://localhost:4000/user/logIn/" + user.email)
      .then(res => {
        this.setState({ ...this.state, UID: res.data[0].user });
        return res.data[0].user;
      }).then(async(UID)=>{
    
      const result =await axios.get("http://localhost:4000/notification/notiAll/"+UID )
      const data = Object.values(result.data);
       return data
      }).then((data)=>{
        const filter= []
        for(let i = 0;i<data.length;i++){
          if(data[i].type==="วันคลอด"){
               filter.push(data[i])
          }
        }
        return filter
      }).then((filter)=>{
        console.log(filter)
      })
    }
  })
}
render(){
  return(
    <div className="container-fluid">
    <div className="row ">
      <HeaderLogin />
    </div>
    <div className="row Nav-shadow posi">
      <NavbarLogin />
    </div>
    <TableAbor />
    <Footerversion/>
  </div>
  )
}
}
export default Abortion


