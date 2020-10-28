import React from "react";
import { Paper, TextField, Button, Grid } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios"
export default function TableOfmom(props) {
  const [list, setList] = React.useState([]);

  const [selectedId, setSelectedId] = React.useState("");
  const setid = (newValue) => {
    setSelectedId(newValue);
  };
  const concatData = (d1, d2) => {
    const children = d1.concat(d2);
    const setId = [];
    children.map((item) => {
      const validKeys = ["cattle_id", "birth_id"];
      Object.keys(item).forEach(
        (key) => validKeys.includes(key) || delete item[key]
      );
      const key = "birth_id";
      item["cattle_id"] = item[key] ? item[key] : item["cattle_id"];
      delete item[key];
      setId.push(item);
    });
    setList(setId);
  };
  React.useEffect(() => {
    concatData(props.data1, props.data2);
  }, [props]);
const  queryDataPDF= async(id)=>{
          const res=await axios.get("http://localhost:4000/treatment/history/" +props.UID+"/"+id)
          console.log(res.data);
}
const queryDataExcel=async(id)=>{
  const res=await axios.get("http://localhost:4000/treatment/history/" +props.UID+"/"+id)
  }
    
  const showlist=()=>{
    return list.map(i=>(
      <Paper key={i.cattle_id} elevation={3} style={{ padding: "10px" }}>
      <Grid container spacing={3}>  
        <Grid item xs={6}>หมายเลขโค:{i.cattle_id}</Grid>
        <Grid item xs={6}> <Button
             onClick={()=>queryDataPDF(i.cattle_id)}
          variant="contained"
          style={{
            marginLeft: "10%",
            backgroundColor: "red",
            color: "#fff",
            padding: "10px",
            width: "100px",
          }}
        >
          PDF
        </Button>{" "}
        <Button
         onClick={()=>queryDataExcel(i.cattle_id)}
   
          variant="contained"
          style={{
            backgroundColor: "green",
            color: "#fff",
            padding: "10px",
            width: "100px",
          }}
        >
          EXCEL
        </Button></Grid>
     
       
     
      </Grid> </Paper>
    ))
  }
  return (
    <Paper square elevation={3} style={{ padding: "20px", margin: "10px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          ค้นหาหมายเลขโค
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            getOptionSelected={(option, value) =>
              option.cattle_id === value.cattle_id
            }
            onChange={(event, newValue) => setid(newValue)}
            options={list.map((option) => option.cattle_id)}
            renderInput={(params) => (
              <TextField
                style={{ width: "100%" }}
                placeholder="กรอกหมายเลขโค"
                {...params}
                size="small"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          {selectedId ===""?
            showlist():<Paper elevation={3} style={{ padding: "10px" }}>
              หมายเลขโค:{selectedId}
              <Button
                onClick={()=>queryDataPDF(selectedId)}
                variant="contained"
                style={{
                  marginLeft: "10%",
                  backgroundColor: "red",
                  color: "#fff",
                  padding: "10px",
                  width: "100px",
                }}
              >
                PDF
              </Button>{" "}
              <Button
              onClick={()=>queryDataExcel(selectedId)}
                variant="contained"
                style={{
                  backgroundColor: "green",
                  color: "#fff",
                  padding: "10px",
                  width: "100px",
                }}
              >
                EXCEL
              </Button>
            </Paper>
          }
        </Grid>
      </Grid>
    </Paper>
  );
}
