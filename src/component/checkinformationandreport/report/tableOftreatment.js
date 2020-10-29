import React from "react";
import { Paper, TextField, Button, Grid } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios"
import jsPDF from "jspdf";
import {font} from './conten'
import "jspdf-autotable";
export default function TableOfmom(props) {
  const [list, setList] = React.useState([]);
const [Owner,setOwner]=React.useState("")
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
    setOwner(props.owner)
  }, [props]);

const  queryDataPDF= async(id)=>{

          const res=await axios.get("http://localhost:4000/treatment/history/" +props.UID+"/"+id)
          const res2=await axios.get("http://localhost:4000/cattle/checkClave/" +props.UID+"/"+id)
          const res3= await axios.get("http://localhost:4000/settingbrand/brand/" +props.UID)
          console.log(Object.values(res3.data))
          const dataSet=[]
         let data=res.data;
          data.map(i=>{
         const arrData= Object.values(i)
         const a=[]
         arrData[1].map(j=>{
         const s = Object.values(j)
         a.push(s+"\n")
         })
         dataSet.push([arrData[0],arrData[3],arrData[8],a])
          })
      
      PDF(dataSet,res2.data[1])
}


const PDF=(data,profile)=>{
  const doc = new jsPDF()
  const content=font
  const finalY = doc.lastAutoTable.finalY || 10
  doc.addFileToVFS('THSarabunNew.ttf',content)
  doc.addFont('THSarabunNew.ttf', 'custom', 'normal');
  doc.setFont('custom');
  doc.setFontSize(24);

  doc.text('ใบประวัติการรักษา', 85, finalY + 15)
  doc.setFontSize(18)
  doc.text('ชื่อฟาร์ม:'+"", 14, finalY + 25)
  doc.text('หมายเลขโค:'+profile.cattle_id, 14, finalY + 35)
  doc.text('วันที่เกิด:'+profile.birth_date, 64, finalY + 35)
  doc.text('สายพันธุ์:'+profile.breed,104, finalY + 35)
  doc.text('สี:'+profile.color,144, finalY + 35)
  doc.text('น้ำหนักแรกเกิด:'+profile.birth_weight,14, finalY + 45)
  doc.text('พ่อพันธุ์:'+profile.sire_id,64, finalY + 45)
  doc.text('แม่พันธุ์:'+profile.dam_id,104, finalY + 45)
  doc.text('วิธีผสม:'+profile.breed_method,144, finalY + 45)
  doc.autoTable({
    startY: finalY + 50,
    head: [['วันที่', 'อาการ','ผลการวินิฉัย', 'การักษา']],
    columnStyles: {
      0: {cellWidth:25},
      1: {cellWidth: 45},
      2: {cellWidth: 45},
      3: {cellWidth: 67},
  },
    body:data,
    headStyles: { font: "custom",fontSize:18,fillColor: [85,157,251]},
    bodyStyles: { font: "custom",fontSize:16},
    theme: 'grid',

  })
  doc.text("ลงชื่อ...........................................................", 120, doc.lastAutoTable.finalY + 15)
  doc.text("       (      " +Owner+"      )", 120, doc.lastAutoTable.finalY + 22);
  doc.text("                     "+date()+"            ", 120, doc.lastAutoTable.finalY + 29);
  doc.save("table.pdf");
}
const queryDataExcel=async(id)=>{
  const res=await axios.get("http://localhost:4000/treatment/history/" +props.UID+"/"+id)

  }
    const date=()=>{
      const newdate= new Date()
       const dd =  newdate.getDate();
      const mm = newdate.getMonth() + 1;
      const yyyy = newdate.getFullYear();
     if (mm < 10) {
       mm = "0" + mm;
     }
     if (dd < 10) {
       dd = "0" + dd;
     }
     return( dd + "/" + mm + "/" + yyyy)
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
            outline:"none"
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
            outline:"none"
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
