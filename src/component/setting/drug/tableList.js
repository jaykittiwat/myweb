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
    fontSize: "22px",
    color: "#fff",
    width: "36%",
    padding: "10px",
    backgroundColor: "#2979ff"
  }
});

export default function TableListEachSetting(props) {
  const classes = useStyles();

  const [data, setdata] = useState([]);
  const [key, setkey] = useState([]);

  useEffect(() => {
    if (props.value === 0) {
      setdata(props.data.drugdata);
      setkey(props.data.drugkey);
    }
    if (props.value === 1) {
      setdata(props.data.vaccinedata);
      setkey(props.data.vaccinekey);
    }
    if (props.value === 2) {
      setdata(props.data.pro_maintaindata);
      setkey(props.data.pro_maintainkey);
    }
    if (props.value === 3) {
      setdata(props.data.pro_syncdata);
      setkey(props.data.pro_synckey);
    }
  }, [props]);

  const deleteDataList = index => {
    axios
      .delete(
        "http://localhost:4000/setting" +
          [
            props.value === 0
              ? "drug"
              : props.value === 1
              ? "vaccine"
              : props.value === 2
              ? "program_maintain"
              : props.value === 3
              ? "program_sync"
              : " "
          ] +
          "/" +
          [
            props.value === 0
              ? "drug"
              : props.value === 1
              ? "vaccine"
              : props.value === 2
              ? "program_maintain"
              : props.value === 3
              ? "program_sync"
              : " "
          ] +
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
      <Paper className={classes.HeaderSetting} elevation={3}>
        {props.value === 0
          ? "รายการยา"
          : props.value === 1
          ? "รายการวัคซีน"
          : props.value === 2
          ? "รายการโปรแกรมการบำรุง"
          : props.value === 3
          ? "รายการโปรแกรมการเหนี่ยวนำ"
          : " "}
      </Paper>
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h6>
                  <b>
                    {props.value === 0
                      ? "ชื่อยา"
                      : props.value === 1
                      ? "ชื่อวัคซีน"
                      : props.value === 2
                      ? "โปรแกรมการบำรุง"
                      : props.value === 3
                      ? "โปรแกรมการเหนี่ยวนำ"
                      : " "}
                  </b>{" "}
                </h6>
              </TableCell>
              <TableCell>
                <h6>
                  <b>
                    {props.value === 0
                      ? "ชื่อสามัญ"
                      : props.value === 1
                      ? "ชื่อสามัญ"
                      : props.value === 2
                      ? "หมายเหตุ"
                      : props.value === 3
                      ? "หมายเหตุ"
                      : " "}
                  </b>{" "}
                </h6>
              </TableCell>
              <TableCell>
                <h6>
                  <b>
                    {props.value === 0
                      ? "ปริมาณ(มิลลิลิตร)"
                      : props.value === 1
                      ? "ปริมาณ(มิลลิลิตร)"
                      : " "}
                  </b>{" "}
                </h6>
              </TableCell>
              <TableCell>
                <h6>
                  <b>
                    {props.value === 0
                      ? "วันที่ผลิต"
                      : props.value === 1
                      ? "วันที่ผลิต"
                      : " "}
                  </b>{" "}
                </h6>
              </TableCell>
              <TableCell>
                <h6>
                  <b>
                    {" "}
                    {props.value === 0
                      ? "วันหมดอายุ"
                      : props.value === 1
                      ? "วันหมดอายุ"
                      : " "}
                  </b>
                </h6>
              </TableCell>
              <TableCell>
                <h6>
                  <b>
                    {props.value === 0
                      ? "จำนวน"
                      : props.value === 1
                      ? "จำนวน"
                      : " "}
                  </b>
                </h6>
              </TableCell>
              <TableCell align="center">
                <h6>
                  <b>ลบ</b>
                </h6>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((data, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  <h6>
                    {" "}
                    {props.value === 0
                      ? data.drug_name
                      : props.value === 1
                      ? data.vaccine_name
                      : props.value === 2
                      ? data.pro_maintain
                      : props.value === 3
                      ? data.pro_sync
                      : " "}
                  </h6>
                </TableCell>
                <TableCell component="th" scope="row">
                  <h6>
                    {props.value === 0
                      ? data.common_drug
                      : props.value === 1
                      ? data.common_vaccine
                      : props.value === 2
                      ? data.note
                      : props.value === 3
                      ? data.note
                      : " "}
                  </h6>
                </TableCell>
                <TableCell component="th" scope="row">
                  <h6>
                    {" "}
                    {props.value === 0
                      ? data.dosage
                      : props.value === 1
                      ? data.dosage
                      : " "}
                  </h6>
                </TableCell>
                <TableCell component="th" scope="row">
                  <h6>
                    {props.value === 0
                      ? data.mfd_date
                      : props.value === 1
                      ? data.mfd_date_vaccine
                      : " "}
                  </h6>
                </TableCell>
                <TableCell component="th" scope="row">
                  <h6>
                    {props.value === 0
                      ? data.exp_date
                      : props.value === 1
                      ? data.exp_date_vaccine
                      : " "}
                  </h6>
                </TableCell>
                <TableCell component="th" scope="row">
                  <h6>
                    {props.value === 0
                      ? data.number
                      : props.value === 1
                      ? data.number
                      : " "}
                  </h6>
                </TableCell>
                <TableCell align="center">
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

