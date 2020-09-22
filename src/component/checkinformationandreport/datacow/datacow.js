import React,{Component} from 'react';
import HeaderLogin from '../../../HeaderLogin';
import NavbarLogin from '../../../demo';
import TableDatacow from './tabledatacow';
import Footerversion from "./../../../footerversion";
import firebase from "./../../../backEnd/firebase";
import axios from 'axios'
import { log } from 'util';
class Header extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[],
      loading:false,
      UID:"",
      key:[]
    }
  }
  componentDidMount(){
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        axios
          .get("http://localhost:4000/user/logIn/" + user.email).then(res => {
            this.setState({ ...this.state, UID: res.data[0].user,fname:res.data[0].fname });
            return res.data[0].user;
          }).then(()=>{
            axios
            .get("http://localhost:4000/cattle/showAll/" + this.state.UID).then(res=>{this.setState({...this.state,data:res.data[1],key:res.data[0]})})
          })
      }
    })
  }


  render(){
      return(
          <div className="container-fluid">
            <HeaderLogin/>
            <div className="row Nav-shadow posi">
          <NavbarLogin />
        </div>
        <TableDatacow cow={this.state.data}/>

            <div style={{height:"30px"}}>{" "}</div>
            <Footerversion/>
        </div>
      
      )
  }
}
export default Header;