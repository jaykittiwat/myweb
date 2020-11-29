import React from 'react'
import {Paper} from "@material-ui/core";
export default function ChartData (props){
React.useEffect(() => {
 console.log(props);
}, [props]);
  return(
    <div style={{padding:"20px",backgroundColor:"#f4f4f4"}}>
        <Paper style={{height:"80vh",padding:"15px"}}  variant='outlined'>

          
        </Paper>
    </div>
  )
}