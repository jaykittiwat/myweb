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
export default function Bigcorral(props) {
  const classes = useStyles();

  return (
    <div style={{ marginTop: "20px" }}>
      <Paper variant="outlined">
        <Grid container spacing={3} style={{ marginTop: "15px" }}>
          <Grid item xs={4} style={{ textAlign: "right", fontSize: "20px" }}>
            ชื่อโรงเรือน
          </Grid>
          <Grid item xs={4}>
            <TextField
              placeholder="กรอกชื่อโรงเรือน"
              variant="outlined"
              size="small"
              style={{ width: "100%", margin: "0" }}
            />
          </Grid>
          <Grid item xs={4} style={{ textAlign: "left" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#1A911E",
                color: "#fff",
                fontSize: "20px",
                width: "100px",
                height: "40px",
              }}
            >
              เพิ่ม
            </Button>
          </Grid>
        </Grid>

        <Paper
        elevation={0}
          style={{ paddingLeft: "10%", paddingRight: "10%", marginTop: "20px",marginBottom:"20px" }}
        >
          <TableContainer >
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "#FFF" }}>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "20%", padding: "10px" }}
                  >
                    รายการที่
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "60%", padding: "10px" }}
                  >
                    ชื่อโรงเรือน
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.tableRightBorder}
                    style={{ fontSize: "18px", width: "20%", padding: "10px" }}
                  >
                    จัดการ
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {props.data.map((i,index)=>{
                return <TableRow ><TableCell className={classes.tableRightBorder} align="center" style={{fontSize: "18px",margin: "0",padding: "5px"}}>{index+1}</TableCell><TableCell align="center" style={{fontSize: "18px",margin: "0",padding: "5px"}} className={classes.tableRightBorder}>{i.bigcorral}</TableCell><TableCell align="center" className={classes.tableRightBorder} style={{fontSize: "18px",margin: "0",padding: "5px"}}><Button variant="contained" style={{color:"#fff",backgroundColor:"red"}}>ลบ</Button></TableCell></TableRow>
              })}
              </TableBody>
            </Table>
          </TableContainer>
         
        </Paper>
        
      </Paper>
    </div>
  );
}
