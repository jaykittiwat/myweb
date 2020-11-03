import React from "react";

import Delete from "@material-ui/icons/Delete";
import Creact from "@material-ui/icons/Create";
import Save from "@material-ui/icons/Save";

import update from "immutability-helper";
import PropTypes from "prop-types";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import IconButton from "@material-ui/core/IconButton";

import {CircularProgress,Table,TableBody,Button,Grid,TextField, Paper,TableRow,TablePagination,TableHead, TableContainer,TableCell,TableFooter} from "@material-ui/core";

import ReactExport from "react-export-excel";
import jsPDF from "jspdf";
import {font} from './conten'
import "jspdf-autotable";
import axios from "axios";
const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  },
  HeaderSetting: {
    color: "#fff",
    background:
      " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
    padding: "8px"
  }
}));
const TablePaginationActions = (props) => {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
};
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};
export default function TableOfmom(props) {
  const classes = useStyles1();
  const [rows, setRows] = React.useState([]);
  const [startEdit, setStartEdit] = React.useState(false);
  const [indexRow, setIndexRow] = React.useState(-1);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [checkPage, setCheckPage] = React.useState(0);
  const Head = [
    { cell: "หมายเลขโค", align: "left" }, // {ชื่อคอลัมล์ซ:" ",จัด(ชิดซ้าย/กลาง/ขวา)}
    { cell: "สถานะ", align: "left" },
    { cell: "สายพันธุ์โค", align: "left" },
    { cell: "สี", align: "left" },
    { cell: "วันที่เกิด", align: "left" },
    { cell: "เพศ", align: "left" },
    { cell: "การผสม", align: "left" },
    { cell: "พ่อ", align: "left" },
    { cell: "แม่", align: "left" },
    { cell: "น้ำหนักแรกเกิด(Kg.)", align: "left" },
    { cell: "น้ำหนักหลังอย่านม(Kg.)", align: "left" },
    { cell: "น้ำหนัก 1 ปี", align: "left" },
    { cell: "ความสูงสะโพก 1 ปี(cm.)", align: "left" },
    { cell: "รอบอกตอนเกิด(cm.)", align: "left" },
    { cell: "รอบอกหลังอย่านม(cm.)", align: "left" },
    { cell: "วันที่อย่านม", align: "left" },
    { cell: "จำนวนการผสม", align: "left" },
     { cell: "โรงเรือน", align: "left" },
    { cell: "คอก", align: "left" },
    { cell: "ฝูง", align: "left" },
    { cell: "แก้ไข", align: "center" }
  ];
  React.useEffect(() => {
  setRows(props.data)
  }, [props]);

  const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const  queryDataPDF= ()=>{

 const setData=[]
 const setData2=[]
rows.map(i=>{
 setData.push([i.cattle_id||"-",i.status||"-",i.breed||"-",i.color||"-",i.birth_date||"-",i.sex||"-",i.breed_method||"-",i.sire_id||"-",i.dam_id||"-",i.birth_weight||"-"])
return setData2.push([i.wean_weight||"-",i.year_weight||"-",i.year_hip_hight||"-",i.birth_chest_head_ratio||"-",i.wean_chest_head_ratio||"-",i.wean_date||"-",i.number_of_breeding||"-",i.bigcorral||"-",i.corral||"-",i.herd_no||"-"])
})
 PDF(setData,setData2)
}


const PDF=(data,data2)=>{
  const doc = new jsPDF('l', 'mm', 'a4')
  const content=font
  const finalY = doc.lastAutoTable.finalY || 10
  doc.addFileToVFS('THSarabunNew.ttf',content)
  doc.addFont('THSarabunNew.ttf', 'custom', 'normal');
  doc.setFont('custom');
  doc.autoTable({
    startY: finalY + 5,
    head: [['หมายเลขโค', 'สถานะ','สายพันธุ์โค', 'สี','วันที่เกิด','เพศ','การผสม','พ่อ','แม่',"น้ำหนักแรกเกิด(kg.)"]],
    columnStyles: {
      0: {cellWidth:30},
      1: {cellWidth: 30},
      2: {cellWidth: 30},
      3: {cellWidth: 15},
      4: {cellWidth: 30},
      5: {cellWidth: 15},
      6: {cellWidth: 20},
      7: {cellWidth: 30},
      8: {cellWidth: 30},
      9: {cellWidth:40},
  },
    body:data,
    headStyles: { font: "custom",fontSize:18,fillColor: [85,157,251]},
    bodyStyles: { font: "custom",fontSize:16},
    theme: 'grid',

  })
  doc.addPage()
  doc.autoTable({
    startY: finalY + 5,
    head: [['น้ำหนักหลังอย่านม(Kg.)','น้ำหนัก 1 ปี(kg.)','ความสูงสะโพก 1 ปี(cm.)','รอบอกตอนเกิด(cm.)','รอบอกหลังอย่านม(cm.)','วันที่อย่านม','จำนวนการผสม(ครั้ง)','โรงเรือน','คอก','ฝูง']],
    columnStyles: {
      0: {cellWidth: 30},
      1: {cellWidth: 30},
      2: {cellWidth: 30},
      3: {cellWidth: 30},
      4: {cellWidth: 30},
      5: {cellWidth: 30},
      6: {cellWidth: 30},
      7: {cellWidth: 20},
      8: {cellWidth: 20},
      9: {cellWidth: 20},
    
  },
    body:data2,
    headStyles: { font: "custom",fontSize:18,fillColor: [85,157,251]},
    bodyStyles: { font: "custom",fontSize:16},
    theme: 'grid',

  })
  doc.save("table.pdf");
}


const Download=()=>{
  return (
    <ExcelFile element={  <Button
      style={{
        color: "#fff",
        backgroundColor: "green",
        fontSize: "16px",
        width: "auto",
        margin: "0px"
      }}
    >
      EXCEL
    </Button>}>
        <ExcelSheet data={rows} name="cattleL_List" >
            <ExcelColumn label="หมายเลขโค" value="cattle_id"   />
            <ExcelColumn label="สถานะ" value="status"   />
            <ExcelColumn label="สายพันธุ์" value="breed"   />
            <ExcelColumn label="สี" value="color"   />
            <ExcelColumn label="วันที่เกิด" value="birth_date"   />
            <ExcelColumn label="เพศ" value="sex"   />
            <ExcelColumn label="การผสม" value="breed_method"   />
            <ExcelColumn label="พ่อ" value="sire_id"   />
            <ExcelColumn label="แม่" value="dam_id"   />
            <ExcelColumn label="น้ำหนักแรกเกิด(kg.)" value="birth_weight"   />
            <ExcelColumn label="น้ำหนักหลังอย่านม(kg.)" value="wean_weight"   />
            <ExcelColumn label="น้ำหนัก 1 ปี(kg.)" value="year_weight"   />
            <ExcelColumn label="ความสูงสะโพก 1 ปี(cm.)" value="year_hip_hight"   />
            <ExcelColumn label="รอบอกตอนเกิด(cm.)" value="birth_chest_head_ratio"   />
            <ExcelColumn label="รอบอกหลังอย่านม(cm.)" value="wean_chest_head_ratio"   />
            <ExcelColumn label="วันที่อย่านม" value="wean_date"   />
            <ExcelColumn label="จำนวนการผสม(ครั้ง)" value="number_of_breeding"   />
            <ExcelColumn label="โรงเรือน" value="bigcorral"   />
            <ExcelColumn label="คอก" value="corral"   />
            <ExcelColumn label="ฝูง" value="herd_no"   />
        </ExcelSheet>
    </ExcelFile>
);
}


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const UPDATE = (index) => {
    setCheckPage(page);
    setIndexRow(index);
    setStartEdit(!startEdit);
  };


  const DELETE = (index) => {
    const getToUpdate = rows;
    const newUpdate = update(getToUpdate, { $splice: [[index, 1]] });
    setRows(newUpdate);
  };


  const SAVE = (index) => {
    axios.post("http://localhost:38844/cattle/status/"+props.UID+"/"+props.keydata[index],rows[index])
    .then(()=>{
      setStartEdit(!startEdit);
      alert("บันทึกสำเร็จ")
    })
   
  };//-------------------------------------------------------------------คำนวณ INDEXXXXXXXXXXXXXXXX


  const SETVALUES = (event, index) => {
    const key = event.target.id;
    const v = event.target.value;
    const getToSet = rows;
    const calIndex = page * rowsPerPage + index;
    const newSet = update(getToSet, { [calIndex]: { [key]: { $set: v } } });
    setRows(newSet);
  };


  if(props.load){
    return( <div className="container-fluid text-center" style={{ marginTop: "17%" }}>
    <CircularProgress size={40} />
    <h3>Loading.....</h3>
  </div>)
  }


  return (
    <Paper square elevation={3}>
      <Paper className={classes.HeaderSetting} elevation={3} square>
        <Grid container>
          <Grid item xs={6}>
            {" "}
            <div style={{ fontSize: "22px", marginTop: "2px" }}>
              ข้อมูลโค
            </div>
          </Grid>
          <Grid item xs={6} style={{textAlign:"right"}}>
       
          {Download()}
          {" "}
          <Button style={{
        color: "#fff",
        backgroundColor: "red",
        fontSize: "16px",
        width: "auto",
        margin: "0px"
      }} onClick={() =>queryDataPDF()}>PDF</Button>
          </Grid>
        </Grid>
      </Paper>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              {Head.map((list, index) => (
                <TableCell
                
                  align={list.align}
                  key={index}
                  style={{ fontSize: "18px" ,minWidth: "180px"}}
                >
                  {list.cell}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="cattle_id"
                      value={row.cattle_id||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.cattle_id||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="status"
                      value={row.status||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.status||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="breed"
                      value={row.breed||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.breed||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="color"
                      value={row.color||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.color||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                    type="date"
                      style={{ width: "100%" }}
                      id="birth_date"
                      value={row.birth_date||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.birth_date||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                  
                      style={{ width: "100%" }}
                      id="sex"
                      value={row.sex||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.sex||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                 
                      style={{ width: "100%" }}
                      id="breed_method"
                      value={row.breed_method||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.breed_method||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                 
                      style={{ width: "100%" }}
                      id="sire_id"
                      value={row.sire_id||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.sire_id||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                 
                      style={{ width: "100%" }}
                      id="dam_id"
                      value={row.sire_id||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.dam_id||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                 
                      style={{ width: "100%" }}
                      id="birth_weight"
                      value={row.birth_weight||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.birth_weight+"Kg."||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                 
                      style={{ width: "100%" }}
                      id="wean_weight"
                      value={row.wean_weight||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.wean_weight||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                 
                      style={{ width: "100%" }}
                      id="year_weight"
                      value={row.year_weight||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.year_weight||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                 
                      style={{ width: "100%" }}
                      id="year_hip_hight"
                      value={row.year_hip_hight||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.year_hip_hight||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                 
                      style={{ width: "100%" }}
                      id="birth_chest_head_ratio"
                      value={row.birth_chest_head_ratio||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.birth_chest_head_ratio||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                 
                      style={{ width: "100%" }}
                      id="wean_chest_head_ratio"
                      value={row.wean_chest_head_ratio||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.wean_chest_head_ratio||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      type="date"
                      style={{ width: "100%" }}
                      id="wean_date"
                      value={row.wean_date||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.wean_date||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="number_of_breeding"
                      value={row.number_of_breeding||"ไม่มี"}
                     
                    ></TextField>
                  ) : (
                    row.number_of_breeding||"ไม่มี"
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="bigcorral"
                      value={row.bigcorral||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.bigcorral||""
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="corral"
                      value={row.corral||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.corral||""
                  )}
                </TableCell>
               < TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="herd_no"
                      value={row.herd_no||""}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.herd_no||""
                  )}
                </TableCell>
                <TableCell style={{ width: "200px" }}>
                  <Grid container>
                    {" "}
                    <Grid item xs={6} align="center">
                      {startEdit && indexRow === index && page === checkPage ? (
                        <Save onClick={() => SAVE(index)} color="primary" />
                      ) : (
                        <Creact
                          onClick={() => UPDATE(index)}
                          style={{ color: "#ffa000" }}
                        />
                      )}
                    </Grid>
                    <Grid item xs={6} align="center">
                      <Delete onClick={() => DELETE(index)} color="secondary" />
                    </Grid>
                  </Grid>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  1,
                  10,
                  25,
                  50,
                  100,
                  { label: "All", value: -1 }
                ]}
                colSpan={24}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
}
