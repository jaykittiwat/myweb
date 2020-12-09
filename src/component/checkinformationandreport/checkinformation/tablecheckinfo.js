import React from 'react'
import {Paper,FormControl,Select} from "@material-ui/core";
import Maintain from './maintain'
import Sync from './sync'
import Breed from './breed'
import Check from './check'
import Clave from './clave'
import Abordtion from './abordtion'
import Treatment from './treatmain'
export default function ChartData (props){
  const [seletedSetting, setseletedSetting] = React.useState("กราฟรายงานการบำรุง");
  return(
    <div style={{padding:"20px",backgroundColor:"#f4f4f4",marginBottom:"50px"}}>
        <Paper style={{height:"85vh",padding:"15px"}}  variant='outlined'>
     
        <Paper
          elevation={0}
          style={{ padding: "10px", textAlign: "center" }}
          square
        >
          <FormControl size="small" style={{ width: "50%" }}>
            <Select
              id="typeuse"
              variant="outlined"
              native
              
             onChange={(e)=>setseletedSetting(e.target.value)}
              style={{ fontSize: "18px" }}
            >
              
              <option>กราฟรายงานการบำรุง</option>
              <option>กราฟรายงานการเหนี่ยวนำ</option>
              <option>กราฟรายงานการผสม</option>
              <option>กราฟรายงานการตรวจท้อง</option>
              <option>กราฟรายงานคลอด</option>
              <option>กราฟรายงานโคแท้ง</option>
              <option>กราฟรายงานการักษา</option>
            </Select>
          </FormControl>{" "}
        </Paper>
        {seletedSetting === "กราฟรายงานการบำรุง" ? (
          <Maintain
            
            UID={props.posts.UID}
          
          />
        ) : seletedSetting === "กราฟรายงานการเหนี่ยวนำ" ? (
          <Sync
          
            UID={props.posts.UID}
           
          />
        ) : seletedSetting === "กราฟรายงานการผสม" ? (
          <Breed
         
            UID={props.posts.UID}
           
          />
        ) : seletedSetting === "กราฟรายงานการตรวจท้อง" ? (
          <Check 
         
            UID={props.posts.UID}
            
          />
        ) : seletedSetting === "กราฟรายงานคลอด" ? (
          <Clave
         
          UID={props.posts.UID}
       
          />
        ) : seletedSetting === "กราฟรายงานโคแท้ง" ? (
          <Abordtion
         
          UID={props.posts.UID}
         
          />
        ) : seletedSetting === "กราฟรายงานการักษา" ? (
          <Treatment
        
          UID={props.posts.UID}
      
          />
        ) : (
          ""
        )}
          
          
        </Paper>
    </div>
  )
}