//โมดูลการรักษา
import React,{Component} from 'react';
import HeaderLogin from './../../../HeaderLogin';
import NavbarLogin from './../../../Navbar';
import PaperDrug from './PaperDrug';
import firebase from "./../../../backEnd/firebase";
import axios from "axios";
import Footerversion from "./../../../footerversion";

class Paperdrug extends Component{
  constructor(props){
    super(props);
    this.state={
      UID: "",
      loading: false,
      drugdata: [],
      drugkey: [],
      vaccinedata: [],
      vaccinekey: [],
      pro_maintaindata: [],
      pro_maintainkey: [],
      pro_syncdata: [],
      pro_synckey: [],
    }
  }
 
    componentDidMount() {
      this.setState({ ...this.state, loading: true });
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          axios
            .get("http://localhost:4000/user/logIn/" + user.email)
            .then(res => {
              this.setState({ ...this.state, UID: res.data[0].user });
            })
            .then(async () => {
              const dr = await axios.get(
                "http://localhost:4000/settingdrug/drug/" +
                  this.state.UID
              );
              const vac = await axios.get(
                "http://localhost:4000/settingvaccine/vaccine/" + this.state.UID
              );
              const p_maintain = await axios.get(
                "http://localhost:4000/settingprogram_maintain/program_maintain/" + this.state.UID
              );
              const p_sync = await axios.get(
                "http://localhost:4000/settingprogram_sync/program_sync/" + this.state.UID
              );
           
              this.setState({
                ...this.state,
                drugdata: dr.data[1],
                drugkey: dr.data[0],
                vaccinedata: vac.data[1],
                vaccinekey: vac.data[0],
                pro_maintaindata:p_maintain.data[1],
                pro_maintainkey: p_maintain.data[0],
                pro_syncdata: p_sync.data[1],
                pro_synckey: p_sync.data[0],
                loading:false
              });
            }).then(()=>{
              console.log(this.state)
            })
        }
      });
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
      <PaperDrug  posts={this.state}/>
      <Footerversion/>
    </div>
      
      )
  }
}
export default Paperdrug;
