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
  const [seletedSetting, setseletedSetting] = React.useState("กราฟแสดงสถิติการบำรุง");
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
              
              <option>กราฟแสดงสถิติการบำรุง</option>
              <option>กราฟแสดงสถิติการเหนี่ยวนำ</option>
              <option>กราฟแสดงสถิติการผสม</option>
              <option>กราฟแสดงสถิติการตรวจท้อง</option>
              <option>กราฟแสดงสถิติการคลอด</option>
              <option>กราฟแสดงสถิติโคแท้ง</option>
              <option>กราฟแสดงสถิติการักษา</option>
            </Select>
          </FormControl>{" "}
        </Paper>
        {seletedSetting === "กราฟแสดงสถิติการบำรุง" ? (
          <Maintain
            
            UID={props.posts.UID}
          
          />
        ) : seletedSetting === "กราฟแสดงสถิติการเหนี่ยวนำ" ? (
          <Sync
          
            UID={props.posts.UID}
           
          />
        ) : seletedSetting === "กราฟแสดงสถิติการผสม" ? (
          <Breed
         
            UID={props.posts.UID}
           
          />
        ) : seletedSetting === "กราฟแสดงสถิติการตรวจท้อง" ? (
          <Check 
         
            UID={props.posts.UID}
            
          />
        ) : seletedSetting === "กราฟแสดงสถิติการคลอด" ? (
          <Clave
         
          UID={props.posts.UID}
       
          />
        ) : seletedSetting === "กราฟแสดงสถิติโคแท้ง" ? (
          <Abordtion
         
          UID={props.posts.UID}
         
          />
        ) : seletedSetting === "กราฟแสดงสถิติการักษา" ? (
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