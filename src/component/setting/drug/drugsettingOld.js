//โมดูลการรักษา
import React,{Component} from 'react';
import HeaderLogin from './../../../HeaderLogin';
import NavbarLogin from './../../../Navbar';
import PaperDrug from './PaperDrug';
import firebase from "./../../../backEnd/firebase";
import axios from "axios";
class Paperdrug extends Component{
  constructor(props){
    super(props);
    this.state={
      UID: "",
      loading: false,
      data:[],
      key:[],
      UID:"",

    }
  }
  componentDidMount(){
    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        axios
        .get("http://localhost:4000/user/logIn/" + user.email).then((res)=>{
          this.setState({ ...this.state, UID: res.data[0].user });
        }).then(async()=>{
           const res =await axios.get("http://localhost:4000/settingdrug/drug/" +
           this.state.UID)
           console.log(res.data)
           this.setState({...this.state,data:res.data[1],ket:res.data[0],loading:false})
          
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
      </div >
      <PaperDrug  posts={this.state}/>
    </div>
      
      )
  }
}
export default Paperdrug;
