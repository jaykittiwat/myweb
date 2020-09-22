import React, { useState } from "react";
import { state1 } from "./startState";
import {Paper,Grid,Button} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import {  withStyles } from "@material-ui/core/styles";


const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
      }
    }
  }))(TableRow)

const DataTableCow = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data,setData] = useState([]);
  const [filter, setFilter] = useState(state1.filter);
  const lowercasedFilter = filter.toLowerCase();

  const rows =  data.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key] === "string" && item[key].toLowerCase().includes(lowercasedFilter)
      );
    });

  React.useEffect(() => {
    setData(props.cow)
  }, [props]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <Paper>
      <Paper
        elevation={3}
        square
        style={{
          color: "#fff",
          width: "100%",
          background:
            " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
          minWidth: "400px",
          padding: "12px",
          fontSize: "22px",
          marginTop:"20px",
        }}
      >
     ตารางข้อมูลโค
        
      </Paper>

      <TableContainer>
      <Grid container style={{marginTop:"5px",marginBottom:"5px"}} spacing={1}>
      <Grid item xs={1} style={{textAlign:"right",fontSize:"18px",color:"#757575",marginTop:"5px"}}>ตัวกรองข้อมูล{"  "}</Grid>
        <Grid item xs={3}><TextField
          onChange={handleChange}
          style={{ backgroundColor: "#fff", borderRadius: "4px" ,width:"100%"}}
          variant="outlined"
          size="small"
          placeholder="หมายเลขโค"
        /></Grid>
        <Grid item xs={1}><TextField
          onChange={handleChange}
          style={{ backgroundColor: "#fff", borderRadius: "4px" ,width:"100%"}}
          variant="outlined"
          size="small"
          placeholder="โรงเรือน"
        /></Grid>
        <Grid item xs={1}><TextField
          onChange={handleChange}
          style={{ backgroundColor: "#fff", borderRadius: "4px" ,width:"100%"}}
          variant="outlined"
          size="small"
          placeholder="คอก"
        /></Grid>
        <Grid item xs={1}><TextField
          onChange={handleChange}
          style={{ backgroundColor: "#fff", borderRadius: "4px" ,width:"100%"}}
          variant="outlined"
          size="small"
          placeholder="ฝูง"
        /></Grid>
        <Grid item xs={1}><TextField
          onChange={handleChange}
          style={{ backgroundColor: "#fff", borderRadius: "4px" ,width:"100%"}}
          variant="outlined"
          size="small"
          placeholder="สถานะ"
        /></Grid>
         <Grid item xs={1}><TextField
          onChange={handleChange}
          style={{ backgroundColor: "#fff", borderRadius: "4px" ,width:"100%"}}
          variant="outlined"
          size="small"
          placeholder="สายพันธุ์"
        /></Grid>
         <Grid item xs={1}><TextField
          onChange={handleChange}
          style={{ backgroundColor: "#fff", borderRadius: "4px" ,width:"100%"}}
          variant="outlined"
          size="small"
          placeholder="สี"
        /></Grid>
      </Grid>
        <Table stickyHeader aria-label="sticky table">
          
          <TableHead>
            
            <TableRow>
              <TableCell><h5>หมายเลขโค</h5></TableCell>
              <TableCell><h5>โรงเรือน</h5></TableCell>
              <TableCell><h5>คอก</h5></TableCell>
              <TableCell><h5>ฝูง</h5></TableCell>
              <TableCell><h5>สถานะ</h5></TableCell>
              <TableCell><h5>พ่อพันธุ์</h5></TableCell>
              <TableCell><h5>แม่พันธุ์</h5></TableCell>
              <TableCell><h5>สายพันธุ์</h5></TableCell>
              <TableCell><h5>สี</h5></TableCell>
              <TableCell align="center"><h5>แก้ไข/ลบ</h5></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <StyledTableRow hover tabIndex={-1} key={index}>
                    <TableCell><h6>{row.cattle_id}</h6></TableCell>
                    <TableCell><h6>{row.bigcorral}</h6></TableCell>
                    <TableCell><h6>{row.corral}</h6></TableCell>
                    <TableCell><h6>{row.herd_no}</h6></TableCell>
                    <TableCell><h6>{row.status}</h6></TableCell>
                    <TableCell><h6>{row.sire_id}</h6></TableCell>
                    <TableCell><h6>{row.dam_id}</h6></TableCell>
                    <TableCell><h6>{row.breed}</h6></TableCell>
                    <TableCell><h6>{row.color}</h6></TableCell>
                    <TableCell align="center"><Button style={{backgroundColor:"#ef6c00",color:"#fff",outline:"none"}} variant="contained">แก้ไข</Button>{" "}<Button color="secondary" variant="contained" style={{outline:"none"}}>ลบ</Button></TableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default DataTableCow;
