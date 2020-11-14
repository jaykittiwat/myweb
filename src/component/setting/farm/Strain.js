import React from "react";
import {
  Paper,
  Grid,
  Button,
  TextField,
  TableContainer,
  TableBody,
  TableCell,
  Table,
  TableHead,
  TableRow,
  Select,
  FormControl,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  HeaderTable: {
    height: "49px",
    color: "#fff",
    backgroundColor: "#251CA6",
    fontSize: "24px",
    paddingTop: "5px",
    paddingLeft: "10px",
  },
  sizeTable: {
    width: "70%",
  },
  tableRightBorder: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderStyle: "solid",
  },
  tableRightBorderBody: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderStyle: "solid",
  },
});
export default function Strain() {
  const classes = useStyles();
  return (
    <div  style={{ marginTop: "20px" }}>
    <Paper variant="outlined"> 
<Grid container spacing={3} style={{marginTop:"15px"}}>
    <Grid item xs={4} style={{textAlign:"right",fontSize:"20px"}}>ชื่อฝูง</Grid>
    <Grid item xs={4}>
        <TextField
            placeholder="กรอกชื่อฝูง"
            variant="outlined"
            size="small"
            style={{ width: "100%", margin: "0" }}
          />
          </Grid>
    <Grid item xs={4} style={{textAlign:"left"}}><Button variant="contained" style={{backgroundColor:"#1A911E",color:"#fff",fontSize:"20px",width:"100px",height:"40px"}}>เพิ่ม</Button></Grid>
</Grid>

<Paper style={{ paddingLeft:"10%",paddingRight:"10%" ,marginTop:"20px"}}>
<TableContainer >
              <Table>
                <TableHead>
                  <TableRow style={{ backgroundColor: "#FFF" }}>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "18px", width: "20%",padding:"10px"}}
                    >
                      รายการที่
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "18px", width: "60%",padding:"10px" }}
                    >
                     ชื่อฝูง
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.tableRightBorder}
                      style={{ fontSize: "18px", width: "20%",padding:"10px" }}
                    >
                     จัดการ
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
            </Paper>
    </Paper>
    </div>
  );
}
