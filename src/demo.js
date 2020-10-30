import React,{useEffect,useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@material-ui/core";
import { B1, B2, B3, B4, B5, B6, B7, B8, B9 } from "./buttonNav";
import axios from 'axios'
import firebase from "./backEnd/firebase"
import Signout from './signout'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));


export default function ButtonAppBar() {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState("");
  const [dataNoti, setDataNoti] = useState(null);
const [uid,setUid]= useState("");
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          axios
            .get("http://localhost:4000/user/logIn/" + user.email)
            .then(res => {
             setCurrentUser (res.data[0].adminfarm||res.data[0].user) 
             setUid(res.data[0].user)
              return res.data[0].adminfarm||res.data[0].user;
            }).then(async(UID)=>{
          
              const result =await axios.get("http://localhost:4000/notification/notiAll/"+UID )
              const result2 =await axios.get("http://localhost:4000/treatment/notiAll/"+UID )
              const data1 = Object.values(result.data);
              const data2 = Object.values(result2.data);
              const data=data1.concat(data2)
            setDataNoti(data[0]==="No"?null:data.length)
                
            })
          
          }
      });
}, []);

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundImage:"linear-gradient(#3128b9, #1d1499, #100874)"}}>
        <Toolbar>
          <Grid container>
            <Grid item xs={"auto"} >
           
              <B1 />
            </Grid>
            <Grid item xs={"auto"} >
              <B2 />
            </Grid>
            <Grid item xs={"auto"} >
              <B3 />
            </Grid>
            <Grid item xs={"auto"} >
              <B4 />
            </Grid>
            <Grid item xs={"auto"} >
              <B5 />
            </Grid>
            <Grid item xs={"auto"} >
             <B6 alam={dataNoti} />
            </Grid>
            <Grid item xs={"auto"} >
              <B7 />
            </Grid>
            <Grid item xs={"auto"} >
              <B8 />
            </Grid>
            <Grid item xs={"auto"} >
              <B9 />
            </Grid>
          </Grid>
          <Signout currentUser={uid}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
