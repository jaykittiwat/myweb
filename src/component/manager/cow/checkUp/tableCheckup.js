import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SaveIcon from '@material-ui/icons/Save';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  fonts:{
    fontSize:"30px"
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{marginTop:"20px"}}>
       <div style={{margin:"0px",fontSize:"18px", backgroundImage: "linear-gradient(  #3128b9,#1d1499,#100874)",padding:"10px",color:"#fff"}}>บันทึกการตรวจท้อง</div>
      <Table className={classes.table} aria-label="simple table">
     
        <TableHead >
        
          <TableRow >
            <TableCell align="left"><h5>ลำดับ</h5></TableCell>
            <TableCell align="center"><h5>หมายเลขโค</h5></TableCell>
            <TableCell align="center"><h5>วันที่ผสม</h5></TableCell>
            <TableCell align="center"><h5>หมายเลขน้ำเชื้อ</h5></TableCell>
            <TableCell align="center"><h5>วันที่ตรวจ</h5></TableCell>
            <TableCell align="center"><h5>เวลา</h5></TableCell>
            <TableCell align="center"><h5>ผล</h5></TableCell>
            <TableCell align="center"><h5>วันแจ้งเตือน</h5></TableCell>
            <TableCell align="center"><h5>หมายเหตุ</h5></TableCell>
            <TableCell align="center"><h5>บันทึก</h5></TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">
                {row.fat}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center"> {row.fat}</TableCell>
              <TableCell align="center"><TextField  variant="outlined" size="small" /></TableCell>
              <TableCell align="center"><TextField   variant="outlined" size="small" /></TableCell>
              <TableCell align="center"><TextField   variant="outlined" size="small" /></TableCell>
              <TableCell align="center">{row.protein}</TableCell>
              <TableCell align="center"><TextField id="outlined-basic"  variant="outlined" size="small" /></TableCell>
              <TableCell align="center"> <Button
        variant="contained"
        color="primary"
        size="small"
     style={{outline:"none"}}
        startIcon={<SaveIcon />}
      >
        Save
      </Button></TableCell>
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
