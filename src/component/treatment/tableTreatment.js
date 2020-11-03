import React from "react";
import {Paper,Grid,Button,TextField,FormGroup,FormLabel,Select,FormControl,TextareaAutosize,CircularProgress} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";

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
  },
  HeaderSetting: {
    marginTop: "20px",
    color: "#fff",
    background:
      " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
    width: "100%",
    padding: "12px",
    fontSize: "22px",
  },
}));

export default function TableTreatment(props) {
  const classes = useStyles();
  const [type, setType] = React.useState("โค");
  const [seletedId, setSelectedId] = React.useState("");
  const [sickness, setSickness] = React.useState("");
  const [operator, setOperator] = React.useState("");
  const [recoder, setRecoder] = React.useState("");
  const [date, setDate] = React.useState("");
  const [datenoti, setDatenoti] = React.useState("");
  const [time, setTime] = React.useState("");
  const [typetreatment, setTypetreatment] = React.useState([]);
  const [seletedMedic, setSeletedMedic] = React.useState([]);
  const [note, setNote] = React.useState("");

  const [top100Films, settop100Films] = React.useState([]);
  const [medicID, setMedicid] = React.useState([]);

  React.useEffect(() => {
    setOperator(props.posts.fname);
    setRecoder(props.posts.fname);
    settop100Films(props.posts.setAllcow);
    setMedicid(props.posts.drug);
  }, [props]);
  const setValue = (newValue) => {
    setSeletedMedic(newValue);
  };
  const setTypetreat = (newValue) =>{
    setTypetreatment(newValue)
  }
  const setid = (newValue) => {
    setSelectedId(newValue);
  };
  const SaveData = () => {
    axios.post("http://localhost:38844/treatment/" + props.posts.UID, {
      datediagnose: datenoti||"",
      id: seletedId||"",
      noti_treatment: 1,
      number_of_treatment: 0,
      operator: operator||"",
      recoder: recoder||"",
      sickness: sickness||"",
      timediagnose: time||"",
      drug: seletedMedic||"",
      typetreatment:typetreatment||"",
      note:note||""
    }).then(()=>{
      axios.post("http://localhost:38844/treatment/noti/" + props.posts.UID+"/"+datenoti, {
        date: datenoti,id_cattle:seletedId,type: "ติดตามการรักษา",
      }).then(()=>{
        alert("บันทึกสำเร็จ")
        window.location.reload();
      })
    })
  };
  const typeList=[{type:"ฉีดใต้ผิว/กล้ามเนื้อ"},{type:"ทา"},{type:"ราด"}, {type:"กิน"},{type:"สอด"}]
  if (props.posts.loading) {
    return (
      <div className="container-fluid text-center" style={{ marginTop: "17%" }}>
        <CircularProgress size={40} />
        <h3>Loading.....</h3>
      </div>
    );
  }
  return (
    <div className="container" style={{ marginBottom: "20px" }}>
      <Paper elevation={3} square>
        <Paper className={classes.HeaderSetting} elevation={3} square>
          บันทึกการรักษา
        </Paper>

        <Grid container spacing={3} style={{ padding: "25px" }}>
          <Grid item xs={6}>
            <FormGroup>
              <FormControl size="small">
                <FormLabel className={classes.title}>ประเภทโค</FormLabel>

                <Select
                  variant="outlined"
                  native
                  onChange={(e) => setType(e.target.value)}
                  value={type}
                >
                  <option>โค</option>
                  <option>ลูกโค</option>
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
              getOptionSelected={(option, value) =>
                option.cattle_id === value.cattle_id
              }
              onChange={(event, newValue) => setid(newValue)}
              options={top100Films.map((option) => option.cattle_id)}
              renderInput={(params) => (
                <TextField
                  placeholder="กรอกหมายเลขโค"
                  {...params}
                  size="small"
                  variant="outlined"
                  InputProps={{ ...params.InputProps, type: "search" }}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>โรค/อาการ</FormLabel>
            </FormGroup>
            <TextareaAutosize
              value={sickness}
              onChange={(e) => setSickness(e.target.value)}
              aria-label="minimum height"
              rowsMin={3}
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>  
                <FormLabel className={classes.title}>ลักษณะการใช้ยา</FormLabel>
            </FormGroup>
            <Autocomplete
              multiple
              id="tags-outlined-type"
              options={typeList}
              getOptionLabel={(option) => option.type}
              filterSelectedOptions
              getOptionSelected={(option, value) =>
                option.type === value.type
              }
              onChange={(event, newValue) => setTypetreat(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="ลักษณะการรักษา"
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>วันที่ตรวจ</FormLabel>
            </FormGroup>
            <TextField
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              variant="outlined"
              style={{ width: "100%" }}
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
              value={datenoti}
              onChange={(e) => setDatenoti(e.target.value)}
              type="date"
              variant="outlined"
              style={{ width: "100%" }}
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup className={classes.marTextField}>
              <FormLabel className={classes.title}>เวลา</FormLabel>
              <TextField
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
              value={operator}
              variant="outlined"
              style={{ width: "100%" }}
              placeholder="กรอกชื่อผู้บันทึก"
              size="small"
              onChange={(e) => setOperator(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel className={classes.title}>ยาที่ใช้รักษา</FormLabel>
            </FormGroup>
            <Autocomplete
              multiple
              id="tags-outlined"
              options={medicID}
              getOptionLabel={(option) => option.drugId}
              filterSelectedOptions
              getOptionSelected={(option, value) =>
                option.drugId === value.drugId
              }
              onChange={(event, newValue) => setValue(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  placeholder="เพิ่มยา"
                  size="small"
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
          <FormGroup>
              <FormLabel className={classes.title}>หมายเหตุ</FormLabel>
            </FormGroup>
            <TextareaAutosize
              value={note}
              onChange={(e) => setNote(e.target.value)}
              aria-label="minimum height"
              rowsMin={3}
              className={classes.textField}
            />
          </Grid>

          <Grid item xs={6}></Grid>
        </Grid>
        <Paper>
          <div className="container-fluid text-center">
            <div className={classes.marTextField}>
              <Button
                onClick={() => SaveData()}
                variant="contained"
                color="primary"
                size="large"
                style={{ width: "250px", margin: "10px", outline: "none" }}
              >
                บันทึก
              </Button>
            </div>{" "}
          </div>
        </Paper>
      </Paper>
    </div>
  );
}
