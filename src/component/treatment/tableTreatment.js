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
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import MenuItem from "@material-ui/core/MenuItem";


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

            />
          </Grid>
        </Grid>
        <Paper>
        
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
