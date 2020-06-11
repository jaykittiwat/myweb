import React from "react";
import "./styleTreatment.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default function TableTreatment() {
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="container martop-10">
      <Paper elevation={3}>
        <div className="text-header-treat">บันทึกการรักษา</div>

        <Grid container spacing={3} className="pad-10-treat">
         
          <Grid item xs={6} spacing={3} container /*1*/>
            {" "}
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                className="textField-w-treat"
                size="small"
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  ประเภทโค
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={age}
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>พ่อ</MenuItem>
                  <MenuItem value={20}>แม่</MenuItem>
                  <MenuItem value={30}>ลูก</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined3"
                label="หมายเลขโค"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined5"
                label="ประเภทการรักษา"
                variant="outlined"
                size="small"
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined7"
                label="ชื่อโรค"
                variant="outlined"
                size="small"
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined9"
                label="วันที่"
                variant="outlined"
                size="small"
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined11"
                label="เวลา"
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid item xs={6} spacing={3} container /*2*/>
            {" "}
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined80"
                label="ระบุอาการ"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl
                variant="outlined"
                className="textField-w-treat"
                size="small"
              >
                <InputLabel id="demo-simple-select-outlined-label">
                  รายการยา
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined2"
                  value={age}
                  onChange={handleChange}
                  label="รายการยา"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined6"
                label="ติดตามอาการ(วัน)"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined8"
                label="ผู้บันทึก"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined81"
                label="ผู้ปฏิบัติ"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="textField-w-treat"
                id="outlined82"
                label="หมายเหตุ"
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
       

          <Grid item xs={4}>
            <Button
              style={{ outline: "none", marginLeft: "98%" }}
              variant="contained"
              color="primary"
              className="textField-w-treat "
              startIcon={<SaveIcon />}
            >
              บันทึก
            </Button>
          </Grid>  
        </Grid>
      </Paper>
    </div>
  );
}
