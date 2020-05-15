import React,{Component} from "react";
import { Button } from "react-bootstrap";
import firebase from "./backEnd/firebase/index";

import {Link} from "react-router-dom";




class Signout extends Component {
 

   logout = e => {
    //console.log("Logout");
    firebase.auth().signOut();
  };


  render() {
    return (
      <div >
            
                 <Link to ="/"><Button className=" floatRight" variant='danger' onClick={(e)=>this.logout(e)} >ออกจากระบบ</Button></Link>

            
         
          </div>

          

    );
  }
}
export default Signout;
/* */