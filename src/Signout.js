import React from "react";
import firebase from "./backEnd/firebase/index";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button"

const logout = e => {
  firebase.auth().signOut();
};

export default function Signout(){
  return(
    
  <Button color="inherit" style={{outline:'none',width:"10%",fontSize:"20px"}} onClick={()=>logout()}><Link to="/" style={{textDecoration:"none",color:"#fff" }}>ออกจากระบบ </Link></Button>
 
  )
}