import React from "react";
import { setData } from "./Data";
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
import ReactExport from "react-export-excel";
import {CircularProgress,Table,TableBody,Button,Grid,TextField, Paper,TableRow,TablePagination,TableHead, TableContainer,TableCell,TableFooter} from "@material-ui/core";
import axios from 'axios'
import jsPDF from "jspdf";
import {font} from './conten'
import "jspdf-autotable";
import firebase from "./../../../backEnd/firebase";

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
const [logo,setLogo]= React.useState(null);
  const [rows, setRows] = React.useState(setData);
  const [startEdit, setStartEdit] = React.useState(false);
  const [indexRow, setIndexRow] = React.useState(-1);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [checkPage, setCheckPage] = React.useState(0);
  const Head = [
    { cell: "ชื่อโค", align: "left" }, // {ชื่อคอลัมล์ซ:" ",จัด(ชิดซ้าย/กลาง/ขวา)}
    { cell: "หมายเลขโค", align: "left" },
    { cell: "เพศ", align: "left" },
    { cell: "สายพันธุ์", align: "left" },
    { cell: "น้ำหนักแรกเกิด", align: "left" },
    { cell: "พ่อพันธุ์", align: "left" },
    { cell: "แม่พันธุ์", align: "left" },
    { cell: "สี", align: "left" },
    { cell: "สุญเขา", align: "left" },
    { cell: "ตีเบอร์", align: "left" },
     { cell: "อย่านม", align: "left" },
    { cell: "แก้ไข", align: "center" }
  ];

  React.useEffect(() => {
    firebase.storage().ref("Photos/"+props.UID+"/").child("Logo").getDownloadURL().then((url) =>{
     setLogo(url)
    })
  setRows(props.data)
    }, [props]);

    const  queryDataPDF= ()=>{

      const setData=[]
      const setData2=[]
     rows.map(i=>{
      setData.push([i.name_cattle||"-",i.birth_id||"-",i.sex||"-",i.breed||"-",i.birth_weight||"-",i.sire_id||"-",i.dam_id||"-",i.color||"-",i.horndetering||"-",i.branding||"-",i.wean||"-"])
   
     })
      
   toDataUrl(logo, (myBase64) => {
         
              PDF(setData,setData2,myBase64)
            });
     }

   const toDataUrl = (url, callback) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
          const reader = new FileReader();
          reader.onloadend = () => {
              callback(reader.result);
          };
          reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    };

     const PDF=(data,data2,base64)=>{
      const doc = new jsPDF('l', 'mm', 'a4')
      const content=font
      const finalY = doc.lastAutoTable.finalY || 10
      doc.addFileToVFS('THSarabunNew.ttf',content)
      doc.addFont('THSarabunNew.ttf', 'custom', 'normal');
      doc.setFont('custom');
     doc.addImage(base64,15,finalY + 5,30,30)
      doc.autoTable({
        startY: finalY + 15,
        head: [['ชื่อโค', 'หมายเลขโค','เพศ', 'สี','สายพันธุ์','น้ำหนักแรกเกิด','พ่อพันธุ์','แม่พันธุ์','สี',"สุญเขา","ตีเบอร์",'อย่านม']],
        columnStyles: {
          0: {cellWidth:30},
          1: {cellWidth: 30},
          2: {cellWidth: 15},
          3: {cellWidth: 15},
          4: {cellWidth: 20},
          5: {cellWidth: 15},
          6: {cellWidth: 20},
          7: {cellWidth: 20},
          8: {cellWidth: 20},
          9: {cellWidth: 15},
          10: {cellWidth:15},
      },
        body:data,
        headStyles: { font: "custom",fontSize:18,fillColor: [85,157,251]},
        bodyStyles: { font: "custom",fontSize:16},
        theme: 'grid',
    
      })

      doc.save("table.pdf");
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
    axios.post("https://aipcattle.herokuapp.com/calf/update/"+props.UID+"/"+props.keydata[index],rows[index])
    .then(()=>{
      setStartEdit(!startEdit);
      alert("บันทึกสำเร็จ")
    })
  };
  const SETVALUES = (event, index) => {
    const key = event.target.id;
    const v = event.target.value;
    const getToSet = rows;
    const calIndex = page * rowsPerPage + index;
    const newSet = update(getToSet, { [calIndex]: { [key]: { $set: v } } });
    setRows(newSet);
  };
  const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;
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
        <ExcelSheet data={rows} name="calf_List" >
            <ExcelColumn label="ชื่อโค" value="name_cattle"   />
            <ExcelColumn label="หมายเลขโค" value="birth_id"   />
            <ExcelColumn label="เพศ" value="sex"   />
            <ExcelColumn label="สายพันธุ์" value="breed"   />
            <ExcelColumn label="น้ำหนักแรกเกิด" value="birth_weight"   />
            <ExcelColumn label="พ่อพันธุ์" value="sire_id"   />
            <ExcelColumn label="แม่พันธุ์" value="dam_id"   />
            <ExcelColumn label="สี" value="color"   />
            <ExcelColumn label="สุญเขา" value="horndetering"   />
            <ExcelColumn label="ตีเบอร์" value="branding"   />
            <ExcelColumn label="อย่านม" value="wean"   />
           
        </ExcelSheet>
    </ExcelFile>
);
}

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
              ข้อมูลลูกโค
            </div>
          </Grid>
          <Grid item xs={6} style={{textAlign:"right"}}>
           
          {Download()}
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
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {Head.map((list, index) => (
                <TableCell
                  align={list.align}
                  key={index}
                  style={{ fontSize: "20px" }}
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
                      id="name_cattle"
                      value={row.name_cattle}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.name_cattle
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="birth_id"
                      value={row.birth_id}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.birth_id||"-"
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="sex"
                      value={row.sex}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.sex
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="breed"
                      value={row.breed}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.breed||"-"
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="birth_weight"
                      value={row.birth_weight}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.birth_weight||"-"
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="sire_id"
                      value={row.sire_id}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.sire_id||"-"
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="dam_id"
                      value={row.dam_id}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.dam_id||"-"
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {startEdit && indexRow === index && page === checkPage ? (
                    <TextField
                      style={{ width: "100%" }}
                      id="color"
                      value={row.color}
                      onChange={(event) => SETVALUES(event, index)}
                    ></TextField>
                  ) : (
                    row.color||"-"
                  )}
                </TableCell>
                <TableCell style={{ fontSize: "18px",width:"150px" }}>
               
                    {row.horndetering?<span style={{color:"green"}}>ทำแล้ว</span>:<span style={{color:"red"}}>ยังไม่เสร็จ</span>||"-"}
                  
                </TableCell>
                <TableCell style={{ fontSize: "18px",width:"150px" }}>
                  {row.branding?<span style={{color:"green"}}>ทำแล้ว</span>:<span style={{color:"red"}}>ยังไม่เสร็จ</span>||"-"}
                </TableCell>
                <TableCell style={{ fontSize: "18px" }}>
                  {row.wean?<span style={{color:"green"}}>ทำแล้ว</span>:<span style={{color:"red"}}>ยังไม่เสร็จ</span>||"-"}
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
                colSpan={15}
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
