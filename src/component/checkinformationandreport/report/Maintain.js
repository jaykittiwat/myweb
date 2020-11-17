import React from "react";
import {
  Paper,
  Grid,
  FormControl,
  Select,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell, CircularProgress
} from "@material-ui/core";
import axios from "axios";
export default function Maintain(props) {
  const [rows, setrows] = React.useState([]);
  const [dataBrand, setDatabrand] = React.useState([]);
const [loading,setloading]=React.useState(true);
  const queryDataPDF = () => {
    // const res2=await axios.get("https://aipcattle.herokuapp.com/cattle/checkClave/" +props.UID+"/"+id)
    /*const data=rows
     res.data.map(i=>{
    data.push(i)
  })
setrows(data)*/
    //console.log(res2.data);
    /*const databrand=Object.values(res3.data)
    const dataSet=[]
   let data=res.data;
    data.map((i)=>{
   const arrData= Object.values(i)
   const a=[]
   arrData[2].map((j) => {
   const s = Object.values(j)
   return a.push(s+"\n")
   })
   return  dataSet.push([arrData[1],arrData[5],arrData[3],a])
    })

setrows(dataSet,res2.data[1],databrand[0])*/
  };

  React.useEffect(() => {
    if (props.UID !== "") {
      axios
        .get("https://aipcattle.herokuapp.com/settingbrand/brand/" + props.UID)
      
        .then((res) => {
          const databrand = Object.values(res.data);
          setDatabrand(databrand[0]);
          axios.get("https://aipcattle.herokuapp.com/maintain/historyAllMaintain/" +props.UID).then(res=>{
             setrows(res.data)
             setloading(false)
              })
        });
    }
    
    
  }, [props]);


  return (
    <>
      <Paper square variant="outlined" style={{ padding: "8px" }}>
        <Grid container spacing={3}>
          <Grid item md={2} xs={12} style={{ textAlign: "right" }}>
            {" "}
            <FormControl size="small" style={{ width: "80%" }}>
              <Select
                style={{ fontSize: "18px" }}
                id="typeuse"
                variant="outlined"
                native
              >
                <option value="">ทั้งหมด</option>
                <option>หมายเลขโค</option>
                <option>โปรแกรมการบำรุง</option>
                <option>ชื่อผู้ปฎิบัติ</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={4} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              style={{ width: "100%" }}
              placeholder="ค้นหา"
            />
          </Grid>

          <Grid item md={2} xs={12} style={{ textAlign: "left" }}>
            <span style={{ fontSize: "18px" }}>
              {" "}
              วันที่{" "}
              <TextField
                variant="outlined"
                type="date"
                size="small"
                style={{ width: "80%" }}
              />
            </span>
          </Grid>

          <Grid item md={2} xs={12} style={{ textAlign: "left" }}>
            <span style={{ fontSize: "18px" }}>
              {" "}
              ถึง{" "}
              <TextField
                variant="outlined"
                type="date"
                size="small"
                style={{ width: "80%" }}
              />
            </span>
          </Grid>
          <Grid item md={2} xs={12} style={{ textAlign: "left" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FF7C10",
                color: "#fff",
                fontSize: "18px",
                width: "150px",
                height: "40px",
                outline: "none",
              }}
            >
              ค้นหา
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Paper square variant="outlined">
        {loading?<div
            className="container-fluid text-center"
            style={{ padding: "10px" }}
          >
            <CircularProgress size={30} />
          </div>:
         <TableContainer style={{ maxHeight: "550px" }}>
         <Table>
           <TableHead>
             <TableRow>
               <TableCell align="center" style={{ fontSize: "18px" }}>
                 รายการที่
               </TableCell>
               <TableCell align="center" style={{ fontSize: "18px" }}>
                 หมายเลขโค
               </TableCell>
               <TableCell align="center" style={{ fontSize: "18px" }}>
                 โปรแกรมการบำรุง
               </TableCell>
               <TableCell align="center" style={{ fontSize: "18px" }}>
                 วันที่
               </TableCell>
               <TableCell align="center" style={{ fontSize: "18px" }}>
                 เวลา
               </TableCell>
               <TableCell align="center" style={{ fontSize: "18px" }}>
                 ผู้ปฏิบัติ
               </TableCell>
             </TableRow>
           </TableHead>
           <TableBody>
             {rows.map((i, index) => {
               return (
                 <TableRow key={index}>
                   <TableCell align="center" style={{ fontSize: "16px" }}>
                     {index + 1}
                   </TableCell>
                   <TableCell align="center" style={{ fontSize: "16px" }}>
                     {i.dam_id}
                   </TableCell>
                   <TableCell align="center" style={{ fontSize: "16px" }}>
                     {i.type_of_maintain}
                   </TableCell>
                   <TableCell align="center" style={{ fontSize: "16px" }}>
                     {i.date}
                   </TableCell>
                   <TableCell align="center" style={{ fontSize: "16px" }}>
                     {i.time}
                   </TableCell>
                   <TableCell align="center" style={{ fontSize: "16px" }}>
                     {i.operator}
                   </TableCell>
                 </TableRow>
               );
             })}
           </TableBody>
         </Table>
       </TableContainer>
        }
       
      </Paper>
      <Grid container spacing={3} style={{ marginTop: "2px" }}>
        <Grid item xs={12} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            style={{
              color: "#fff",
              backgroundColor: "#1D6F42",
              fontSize: "18px",
              width: "100px",
            }}
          >
            Excel
          </Button>{" "}
          <Button
            onClick={() => console.log(rows)}
            variant="contained"
            style={{
              color: "#fff",
              backgroundColor: "#E61F25",
              fontSize: "18px",
              width: "100px",
            }}
          >
            PDF
          </Button>{" "}
        </Grid>
      </Grid>
    </>
  );
}
