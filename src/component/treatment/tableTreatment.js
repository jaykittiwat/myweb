import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import { FormControl } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import {top100Films }from './datademo'
import Autocomplete from '@material-ui/lab/Autocomplete';

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
    width: "100%",
  },
  table: {
    minWidth: 650,
  }, HeaderSetting: {
    marginTop: "20px",
    color: "#fff",
    background: " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
    width:"100%",
    padding: "12px",
    fontSize: "22px"
  }
}));



export default function TableTreatment() {
  const classes = useStyles();
  const [time, setTime] = "";

  return (
    <div className="container">
      <Paper elevation={3} square>
      <Paper className={classes.HeaderSetting} elevation={3} square>
       บันทึกการรักษา
      </Paper>

        <Grid container spacing={3} style={{padding:"25px"}}>
          <Grid item xs={6}>
          <FormGroup>
        <FormControl size="small" >
          <FormLabel className={classes.title}>
            ประเภทโค
          </FormLabel>
       
          <Select variant="outlined" native    >
            <option>พ่อพันธุ์</option>
            <option>แม่พันธุ์</option>
            <option >ลูกโค</option>
          </Select>
        </FormControl>
      </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>หมายเลขโค</FormLabel>
            </FormGroup>
            <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
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
        <FormControl size="small" >
          <FormLabel className={classes.title}>
            ประเภทการรักษา
          </FormLabel>
       
          <Select variant="outlined" native    >
            <option>ฉีดใต้ผิว/กล้ามเนื้อ</option>
            <option>ทา</option>
            <option >ราด</option>
            <option >กิน</option>
          </Select>
        </FormControl>
      </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>วันที่ตรวจ</FormLabel>
            </FormGroup>
            <TextField
              type="date"
              variant="outlined"
              style={{width:"100%"}}
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
              style={{width:"100%"}}
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
             style={{width:"100%"}}
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
              style={{width:"100%"}}
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
