//โมดูลการรักษา
import React,{Component} from 'react';
import HeaderLogin from './../../../HeaderLogin';
import NavbarLogin from './../../../demo';
import PaperDrug from './PaperDrug2';
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
            .get("https://aipcattle.herokuapp.com/user/logIn/" + user.email)
            .then(res => {
              this.setState({ ...this.state,  UID:res.data[0].privilege==="เจ้าของฟาร์ม"?res.data[0].user:res.data[0].adminfarm });
            })
            .then(async () => {
              const dr = await axios.get(
                "https://aipcattle.herokuapp.com/settingdrug/drug/" +
                  this.state.UID
              );
              const vac = await axios.get(
                "https://aipcattle.herokuapp.com/settingvaccine/vaccine/" + this.state.UID
              );
              const p_maintain = await axios.get(
                "https://aipcattle.herokuapp.com/settingprogram_maintain/program_maintain/" + this.state.UID
              );
              const p_sync = await axios.get(
                "https://aipcattle.herokuapp.com/settingprogram_sync/program_sync/" + this.state.UID
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
      <PaperDrug  posts={this.state} storage={localStorage.getItem('selectSetting')||""}/>
      <div className="row mar"></div>

      <Footerversion/>
    </div>
      
      )
  }
}
export default Paperdrug;
