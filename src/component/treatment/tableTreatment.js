import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import "./styleTreatment.css";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import { FormControl } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    marginLeft: "15%",
  },
  title: {
    fontSize: "18px",
    color: "#3f3f3f",
  },
  textField: {
    width: "80%",
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, name2, volume, pdate, edate, amount) {
  return { name, name2, volume, pdate, edate, amount };
}

const rows = [
  createData("บิวตาซิว", "บิวตาซิว", 140, "2009/05/06", "2019/12/06", 1),
  createData(
    "Isoproply Alcohol",
    "แอลกอฮอล์ล้างแผล",
    500,
    "2020/08/30",
    "2021/08/30",
    1
  ),
];

export default function TableTreatment() {
  const classes = useStyles();
  const [time, setTime] = "";

  return (
    <div className="container">
      <Paper elevation={1}>
        <div className="text-header-treat martop-10">บันทึกการรักษา</div>

        <Grid container spacing={3} className="pad-10">
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>ประเภทโค</FormLabel>
              <FormControl className={classes.formControl} size="small">
                <Select
                  variant="outlined"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                >
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>หมายเลขโค</FormLabel>
            </FormGroup>
            <TextField
              variant="outlined"
              className="textField-w"
              placeholder="กรอกหมายเลขโค"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>อาการ</FormLabel>
            </FormGroup>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={3}
              className={classes.textField}
              className="textField-w"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>ประเภทการรักษา</FormLabel>
            </FormGroup>
            <TextField
              variant="outlined"
              className="textField-w"
              placeholder="กรอกประเภทการรักษา"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>วันที่ตรวจ</FormLabel>
            </FormGroup>
            <TextField
              type="date"
              variant="outlined"
              className="textField-w"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>
                วันที่ติดตามผลการรักษา
              </FormLabel>
            </FormGroup>
            <TextField
              type="date"
              variant="outlined"
              className="textField-w"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup className={classes.marTextField}>
              <FormLabel className={classes.title}>เวลา</FormLabel>
              <TextField
                id="input4"
                variant="outlined"
                type="time"
                size="small"
                defaultValue="00:00"
                onChange={(e) => setTime(e.target.value)}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>ผู้บันทึก</FormLabel>
            </FormGroup>
            <TextField
              variant="outlined"
              className="textField-w"
              placeholder="กรอกชื่อผู้บันทึก"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>ชื่อโรค</FormLabel>
            </FormGroup>
            <TextField
              variant="outlined"
              className="textField-w"
              placeholder="กรอกชื่อโรค"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>หมายเหตุ</FormLabel>
            </FormGroup>
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={3}
              className={classes.textField}
              className="textField-w"
            />
          </Grid>
        </Grid>
        <Paper>
          <div className="row">
            <div className="pad-l-20">ยา</div>
            <div className="col">
              <hr />
            </div>
          </div>

          <TableContainer
            component={Paper}
            style={{ width: "98%", margin: "10px" }}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h6>
                      <b>ชื่อยา</b>
                    </h6>
                  </TableCell>
                  <TableCell align="right">
                    <h6>
                      <b>ชื่อสามัญ</b>
                    </h6>
                  </TableCell>
                  <TableCell align="right">
                    <h6>
                      <b>ปริมาณยา(มิลลิลิตร)</b>
                    </h6>
                  </TableCell>
                  <TableCell align="right">
                    <h6>
                      <b>วันที่ผลิต</b>
                    </h6>
                  </TableCell>
                  <TableCell align="right">
                    <h6>
                      <b>วันหมดอายุ</b>
                    </h6>
                  </TableCell>
                  <TableCell align="right">
                    <h6>
                      <b>จำนวน</b>
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
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.name2}</TableCell>
                    <TableCell align="right">{row.volume}</TableCell>
                    <TableCell align="right">{row.pdate}</TableCell>
                    <TableCell align="right">{row.edate}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        color="secondary"
                        style={{
                          outline: "none",
                          height: "30px",
                          width: "100px",
                        }}
                      >
                        ลบ
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="container-fluid text-center">
              <Button
                variant="outlined"
                color="primary"
                style={{
                  outline: "none",
                  height: "30px",
                  width: "100px",
                  margin: "10px",
                }}
              >
                เพิ่ม
              </Button>
            </div>
          </TableContainer>

          <div className="container-fluid text-center">
            <div className={classes.marTextField}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ width: "250px", margin: "10px", outline: "none" }}
              >
                บันทึก
              </Button>

              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ width: "250px", margin: "10px", outline: "none" }}
              >
                ยกเลิก
              </Button>
            </div>{" "}
          </div>
        </Paper>
      </Paper>
    </div>
  );
}
