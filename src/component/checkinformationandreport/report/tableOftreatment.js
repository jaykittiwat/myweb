import React from "react";
import { Paper, TextField, Button, Grid } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios"
import jsPDF from "jspdf";
import {font} from './conten'
import "jspdf-autotable";
import ReactExport from 'react-data-export';



export default function TableOfmom(props) {
  const [list, setList] = React.useState([]);
  const [Owner,setOwner]=React.useState("")
  const [selectedId, setSelectedId] = React.useState("");
  const [dataExcel,setDataExcel]=React.useState(null)
const [indexCheck,setIndexCheck]=React.useState(null)
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

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
     return setId.push(item);
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
     
          const databrand=Object.values(res3.data)
          const dataSet=[]
         let data=res.data;
          data.map((i)=>{
         const arrData= Object.values(i)
         const a=[]
         arrData[1].map((j) => {
         const s = Object.values(j)
         return  a.push(s+"\n")
         })
        return dataSet.push([arrData[0],arrData[3],arrData[8],a])
          })
      
      PDF(dataSet,res2.data[1],databrand[0])
}





const PDF=(data,profile,databrand)=>{
  const doc = new jsPDF()
  const content=font
  const finalY = doc.lastAutoTable.finalY || 10
  doc.addFileToVFS('THSarabunNew.ttf',content)
  doc.addFont('THSarabunNew.ttf', 'custom', 'normal');
  doc.setFont('custom');
  doc.setFontSize(24);

  doc.text('ใบประวัติการรักษา', 85, finalY + 15)
  doc.setFontSize(18)
  doc.text('ชื่อฟาร์ม:'+databrand.farm_name_TH, 14, finalY + 25)
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
  setSelectedId("")
}


const mapDrug=(data)=>{

let value=""
data.map(i=>{
  return value=value+" -"+i.drugId+"\n"
})
return value
}


const queryDataExcel=async(id,index)=>{
   const res=await axios.get("http://localhost:4000/treatment/history/" +props.UID+"/"+id)
   const res2=await axios.get("http://localhost:4000/cattle/checkClave/" +props.UID+"/"+id)
   const res3= await axios.get("http://localhost:4000/settingbrand/brand/" +props.UID)
     
   const databrand=Object.values(res3.data)
   const data=[]
   const borders = {
    top: { style: "thin" },
    bottom: { style: "thin" },
    left: { style: "thin" },
    right: { style: "thin" }
  }
   res.data.map(i=>{
    const newSet=[
      {
        value: i.datediagnose ,style: {border: borders,alignment: {wrapText: true, horizontal: 'left', vertical: 'top',}}
      },
      {
        value: i.note,style: {border: borders,alignment: {wrapText: true, horizontal: 'left', vertical: 'top'}}
      },
      {
        value: i.sickness,style: {border: borders,alignment: {wrapText: true, horizontal: 'left', vertical: 'top'}}
      },
      {
        value: mapDrug(i.drug),style: {border: borders,alignment: {wrapText: true, horizontal: 'left', vertical: 'top'}}
   
      }
    ]

    return data.push(newSet)
   })
  /* const data2=[]
   const data3=[]
   const setDataApi=[res2.data[1]]
 
   setDataApi.map(i=>{
    const newSet2=[
      {
        value: i.cattle_id , style: {border: borders} , 
      },
      {
        value: i.birth_date, style: { border: borders},
      },
      {
        value: i.breed , style: { border: borders},
      },
      {
        value: i.color, style: { border: borders},
      },
    ]
    const newSet3=[
  
      {
        value: i.birth_weight, style: { border: borders},
      },
      {
        value: i.sire_id, style: { border: borders},
      },
      {
        value: i.dam_id, style: { border: borders},
      },
      {
        value: i.breed_method, style: { border: borders},
      }
    ]

  data2.push(newSet2)
  data3.push(newSet3)
   })*/



const multiDataSet=[
  { 
    xSteps:0,
    ySteps:0,
    columns: [
      {title: "ใบประวัติการรักษา"},//pixels width 
  ],
  data:[]
  },
  { 
    xSteps:0,
    ySteps:1,
    columns: [
      {title: "ชื่อฟาร์ม:"+databrand[0].farm_name_TH, width: {wpx: 90}},//pixels width 
  ],
  data:[]
  },
  { 
    xSteps:0,
    ySteps:0,
    columns: [
      {title: "หมายเลขโค: "+res2.data[1].cattle_id||res2.data[1].birth_id , width: {wpx: 90},},//pixels width 
      {title: "วันที่เกิด: "+res2.data[1].birth_date, width: {wpx:90},},//char width 
      {title: "สายพันธุ์: "+res2.data[1].breed, width: {wpx: 90}, },
      {title: "สี: "+res2.data[1].color, width: {wpx:90},},
  ],
  data:[]
  },
  { 
    xSteps:0,
    ySteps:0,
    columns: [
      {title: "น้ำหนักแรกเกิด: "+res2.data[1].birth_weight, width: {wpx: 100}, },//pixels width 
      {title: "พ่อพันธุ์: "+res2.data[1].sire_id, width: {wpx:100}, },//char width 
      {title: "แม่พันธุ์: "+res2.data[1].dam_id, width: {wpx: 100},},
      {title: "วิธีผสม: "+res2.data[1].breed_method, width: {wpx:100}, },
  ],
  data:[]
  },
  { 
    xSteps:0,
    ySteps:1,
    columns: [
      {title: "วันที่", width: {wpx: 100}, style: { border: borders, font: { bold: true }},},//pixels width 
      {title: "อาการ", width: {wpx:100}, style: { border: borders, font: { bold: true }},},//char width 
      {title: "ผลการวินิจฉัย", width: {wpx:100}, style: { border: borders, font: { bold: true }},},
      {title: "การรักษา", width: {wpx:150}, style: { border: borders, font: { bold: true }},},
  ],
  data:data
  }
]
 setDataExcel(multiDataSet)
setIndexCheck(index)

  }



const date=()=>{
      const newdate= new Date()
       let dd =  newdate.getDate();
      let mm = newdate.getMonth() + 1;
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
    return list.map((i,index)=>(
      <Paper key={i.cattle_id} elevation={3} style={{ padding: "10px" }}>
      <Grid container spacing={3}>  
        <Grid item xs={6}>หมายเลขโค:{i.cattle_id}</Grid>
        <Grid item xs={6} style={{textAlign:"center"}}> <Button
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
         onClick={()=>queryDataExcel(i.cattle_id,index)}
   
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
        </Button>
        {dataExcel != null&&index===indexCheck ? 
                 <ExcelFile element={<button>Download Data With Styles</button>}  hideElement={true}>
                 <ExcelSheet dataSet={dataExcel} name="ใบประวัติการรักษา"/>
             </ExcelFile>:null
            }   
        
        </Grid>
     
       

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
        <Grid item xs={12} >
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
              onClick={()=>queryDataExcel(selectedId,null)}
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
              {dataExcel != null&&selectedId!=="" ? 
               <ExcelFile element={<button>Download Data With Styles</button>} hideElement={true}>
               <ExcelSheet dataSet={dataExcel} name="ใบประวัติการรักษา"/>
           </ExcelFile>:null
              
            }   
            </Paper>
          }
        </Grid>
      </Grid>
    </Paper>
  );
}
