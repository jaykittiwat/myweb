import React,{Component} from "react";
import Signout from "./Signout";
import "./styleNavbar.css";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import firebase from "./backEnd/firebase"
//import thor from './component/Img/2.jpg';
//import axios from "axios";
//react------ HOOK
import Badge from '@material-ui/core/Badge';

import axios from 'axios'

class NavbarLogin extends Component {

 constructor(props){
   super(props);
   this.state={
     currentUser:"",
     dara:null
   }
 }
   async componentDidMount() {
    
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        axios
          .get("http://localhost:4000/user/logIn/" + user.email)
          .then(res => {
            this.setState({ ...this.state, currentUser: res.data[0].user });
            return res.data[0].user;
          }).then(async(UID)=>{
        
          const result =await axios.get("http://localhost:4000/notification/notiAll/"+UID )
          const data = Object.values(result.data);
                this.setState({...this.state,dataNoti:data.length})
          })
        
        }
    });


  }
  

render(){
 

  return (
    <div className="container-fluid posi">
      <nav className="row">
        <div className="dropdown ">
          <Link to="/login">
            {" "}
            <div className="dropbtn">หน้าหลัก</div>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/regiscow">
            <div className="dropbtn">ลงทะเบียนโค</div>
          </Link>
        </div>

        <div className="dropdown">
          <div className="dropbtn">การจัดการแม่พันธุ์โค</div>
          <div className="dropdown-content">
            <Link to="/fatten">
              <div>บันทึกการบำรุง</div>
            </Link>
            <Link to="/induction">
              <div>บันทึกการเหนี่ยวนำ</div>
            </Link>
            <Link to="/breed">
              <div>บันทึกการผสมพันธุ์</div>
            </Link>
            <Link to="/checkup">
              <div>บันทึกการตรวจท้อง</div>
            </Link>
            <Link to="/calve">
              <div>บันทึกการคลอดลูก</div>
            </Link>
            <Link to="/abortion">
              <div>บันทึกการแท้งลูก</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/calfmanage">
            <div className="dropbtn">การจัดการลูกโค</div>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/treatment">
            <div className="dropbtn">บันทึกการรักษา</div>
          </Link>
        </div>

        <div className="dropdown">
          <Link to="/notification">
                  
          
       <div className="dropbtn"><Badge badgeContent={this.state.dataNoti} color="secondary">การแจ้งเตือน</Badge></div>
    
            
          </Link>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ออกรายงาน</div>
          <div className="dropdown-content">
            <Link to="/checkinformation">
              <div>ตรวจสอบข้อมูล</div>
            </Link>
            <Link to="/report">
              <div>ออกรายงาน</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropbtn">ตั้งค่าระบบฟาร์ม</div>
          <div className="dropdown-content">
            <Link to="/brandsetting">
              <div>ตั้งค่าแบรนด์</div>
            </Link>
            <Link to="/usersetting">
              <div>ตั้งค่าข้อมูลผู้ใช้</div>
            </Link>
            <Link to="/farmsetting">
              <div>ตั้งค่าระบบฟาร์ม</div>
            </Link>
            <Link to="/drugsetting">
              <div>ตั้งค่าระบบยา</div>
            </Link>
          </div>
        </div>

        <div className="dropdown">
          <Link to="/instructionmanual">
            <div className="dropbtn">คู่มือการใช้งาน</div>
          </Link>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md">
          <div className="row" style={{marginTop: "8px" ,marginRight:"5%"}}>
         
          <Avatar style={{backgroundColor:"#ff5722"}}>{this.state.currentUser.substring(0,1)}</Avatar>
  <div style={{ color:"#ffffff", marginTop: "8px" ,paddingLeft:"5%",fontSize:"18px"}}>{this.state.currentUser}</div>
         
          </div>
        </div>

        <div className="col-md-1 floatRight sigout-div ">
          <Signout />
        </div>
      </nav>
    </div>
  );
}
 
}

export default NavbarLogin;