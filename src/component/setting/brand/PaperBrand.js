import React from "react";
import "./../styleSetting.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";


export default function PaperBrand() {
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };
  return (
    <div className="container martop-10">
      <Paper elevation={3} >
        <div className="text-header">ตั้งค่าแบรนด์</div>

        <Grid container spacing={3} className="pad30">
        <Grid item xs={12}>
            <TextField
              className="textField-width"
              id="outlined1"
              label="ชื่อฟาร์ม(ภาษาไทย)"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="textField-width"
              id="outlined2"
              label="ชื่อฟาร์ม(ภาษาอังกฤษ)"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="textField-width"
              id="outlined3"
              label="ชื่อ-นามสกุล(เจ้าของฟาร์ม)"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="textField-width"
              id="outlined4"
              label="Facebook"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="textField-width"
              id="outlined5"
              label="ที่อยู่ฟาร์ม"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="textField-width"
              id="outlined6"
              label="เบอร์โทรติดต่อ"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className="textField-width"
              id="outlined6"
              label="อีเมล์ติดต่อ"
              size="small"
            />
          </Grid>
        
           <Grid item xs={2}>
            <Button
              style={{ outline: "none", marginLeft: "220%" }}
              variant="contained"
              color="secondary"
              className="textField-width"
              startIcon={<SaveIcon />}
            >
              แก้ไข
            </Button>{" "}
          </Grid>
          <Grid  item xs={2}>
          
          <Button
              style={{ outline: "none", marginLeft: "220%" }}
              variant="contained"
              color="primary"
              className="textField-width"
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
