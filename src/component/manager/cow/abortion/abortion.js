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
    UID:"",
      loading:false,
      keyNoti:[],
      valuesNoti:[],
      dataNoti:[],
      keyDataNoti:[],
      fname:""
  }
}

componentDidMount(){
  this.setState({ ...this.state, loading: true });
  firebase.auth().onAuthStateChanged(user =>{
    if(user){
      axios
      .get("http://localhost:38844/user/logIn/" + user.email)
      .then(res => {
        this.setState({ ...this.state,UID:res.data[0].privilege==="เจ้าของฟาร์ม"?res.data[0].user:res.data[0].adminfarm,fname:res.data[0].fname });
       
      }).then(async()=>{
    
      const result =await axios.get("http://localhost:38844/notification/notiAll/"+this.state.UID )
     // console.log(result.data)
      const data = [Object.keys(result.data),Object.values(result.data)];
       return data
      }).then((data)=>{
        const datakey=data[0]
        const datavalue=data[1]
        const filterkeys= []
        const filtervalues= []
        for(let i = 0;i<data[1].length;i++){
          if( datavalue[i].type==="วันคลอด"){
            filtervalues.push(datavalue[i])
            filterkeys.push(datakey[i])
          }
        }
    this.setState({...this.state,keyNoti:filterkeys,valuesNoti:filtervalues,loading:false})
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
    <TableAbor posts={this.state} />
    <Footerversion/>
  </div>
  )
}
}
export default Abortion


