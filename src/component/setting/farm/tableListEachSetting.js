import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  table: {
    marginTop: "3px",
    width: "100%"
  },
  header: {
    marginTop: "20px",
    margin: "0",
    padding: "10px",
    fontSize: "22px",
    color: "#fff",
    backgroundColor: "#304ffe",
    borderRadius: "5px 5px 0 0"
  }, 
  HeaderSetting: {
    marginTop: "20px",
    color: "#fff",
    width: "25%",
    backgroundColor: "#2979ff",
    padding: "12px",
    fontSize:"22px",
    minWidth:"400px",
 
    
  }
});

export default function TableListEachSetting(props) {
  const classes = useStyles();
  const [nameSelected, setnameSelected] = useState("โรงเรือน");
  const [data, setdata] = useState([]);
  const [key, setkey] = useState([]);

  useEffect(() => {
    if (props.nameList === "โรงเรือน") {
      setdata(props.data.Bigcorraldata);
      setkey(props.data.Bigcorralkey);
    }
    if (props.nameList === "คอก") {
      setdata(props.data.corraldata);
      setkey(props.data.corralkey);
    }
    if (props.nameList === "ฝูง") {
      setdata(props.data.herddata);
      setkey(props.data.herdkey);
    }
    if (props.nameList === "สี") {
      setdata(props.data.colordata);
      setkey(props.data.colorkey);
    }
    if (props.nameList === "สายพันธุ์") {
      setdata(props.data.striandata);
      setkey(props.data.striankey);
    }
    setnameSelected(props.nameList);
  }, [props]);
  const deleteDataList = index => {
    axios
      .delete(
        "http://localhost:4000/setting" +
          props.keyObjecselected +
          "/" +
          props.keyObjecselected +
          "/" +
          props.data.UID +
          "/" +
          key[index]
      )
      .then(() => {
        window.location.reload();
      });
  };
  if (props.data.loading) {
    return (
      <div className="container-fluid text-center" style={{ marginTop: "17%" }}>
        <CircularProgress size={40} />
        <h3>Loading.....</h3>
      </div>
    );
  }
  return (
    <div>
   <Paper className={classes.HeaderSetting} elevation={3} square>
        {props.value === 0
          ? "รายการโรงเรือน"
          : props.value === 1
          ? "รายการคอก"
          : props.value === 2
          ? "รายการฝูง"
          : props.value === 3
          ? "รายการสีโค"
          : "รายการสายพันธุ์"}
      </Paper>
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
               <h6> <b>{nameSelected}</b></h6>
              </TableCell>
        <TableCell align="right" ><h6><b>ลบ</b></h6></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((d, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <h6>
                    {props.nameList === "โรงเรือน"
                      ? d.bigcorral
                      : props.nameList === "คอก"
                      ? d.corral
                      : props.nameList === "ฝูง"
                      ? d.herd_num
                      : props.nameList === "สี"
                      ? d.color
                      : props.nameList === "สายพันธุ์"
                      ? d.strian
                      : " "}
                  </h6>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => deleteDataList(index)}
                    variant="outlined"
                    color="secondary"
                    style={{ outline: "none", height: "30px", width: "100px" }}
                  >
                    ลบ
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
