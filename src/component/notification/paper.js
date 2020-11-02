import React from "react";
import Demo from "./democalen";
import { Grid,CircularProgress } from "@material-ui/core";
import {setPicker} from './setDatePicker'
export default function PaperNotificaion(props) {
  const loading = props.posts.loading;

  const [dateGen,setDateGen]= React.useState([]);
  React.useEffect(() => {
   setDateGen(setPicker(props.posts.dataNoti))
   
  }, [props]);


 
  if (loading) {
    return (
      <div className="container-fluid text-center" style={{ marginTop: "17%" }}>
        <CircularProgress size={40} />
        <h3>Loading.....</h3>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <Grid container spacing={5}>
        {" "}
        
       
        <Grid item md={12} xs={12} >
          {" "}
           <Demo Data={dateGen} />
         
        </Grid>
       
      </Grid>

      <div style={{ marginTop: "50px" }}></div>
    </div>
  );
}
