import React, { useEffect } from "react";
import "./../styleSetting.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormLabel, FormGroup, TextField } from "@material-ui/core";
import update from "immutability-helper";
import axios from "axios"

export default function PaperBrand(props) {
  const [data, setData] = React.useState([""]);
  const [disabled, setEnabled] = React.useState(true);
  const handleClickfalse = event => {
    setEnabled(false);
  };
  const handleClicktrue = event => {
    axios.post("http://localhost:4000/settingbrand/brandUpdata/"+props.posts.UID+"/"+props.posts.key,data[0]).then((res)=>{
      alert("บันทึกสำเร็จ");
     
    })
    
      setEnabled(true);
    
   
  };
  const setStateForm = event => {
    const v = event.target.value;
    const ID = event.target.id;
    const collection = data; //[{key:value}]
    const newObj = update(collection, { 0: { [ID]: { $set: v } } });
    setData(newObj);
  };
  
  useEffect(() => {
    setData(props.posts.data);
  }, [props]);

  if (props.posts.loading === true) {
    return (
      <div className="container-fluid text-center" style={{ marginTop: "17%" }}>
        <CircularProgress size={40} />
        <h3>Loading.....</h3>
      </div>
    );
  }
  return (
    <div className="container martop-10">
      <Paper elevation={3}>
        <div className="text-header">ตั้งค่าแบรนด์</div>
        <Grid container spacing={3} className="pad30">
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "black" }}>ชื่อฟาร์มภาษไทย</FormLabel>
              <TextField
                id="farm_name_TH"
                onChange={setStateForm}
                variant="outlined"
                disabled={disabled}
                value={data[0].farm_name_TH || " "}
                className="textField-width"
                size="small"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "black" }}>
                ชื่อฟาร์มภาษาอังกฤษ
              </FormLabel>
              <TextField
                id="farm_name_EN"
                variant="outlined"
                disabled={disabled}
                onChange={setStateForm}
                value={data[0].farm_name_EN || " "}
                className="textField-width"
                size="small"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "black" }}>
                ชื่อ-นามสกุล(เจ้าของฟาร์ม)
              </FormLabel>
              <TextField
                id="farm_name_TH"
                variant="outlined"
                onChange={setStateForm}
                disabled={disabled}
                className="textField-width"
                value={data[0].farm_name_TH || " "} //<------------------------------เวรเอ้ย ทำหน้าเว็บไม่ดูหลังบ้านเลย เวรจริงๆ ลำบากกูเนี่ย
                //label="ชื่อ-นามสกุล(เจ้าของฟาร์ม)"
                size="small"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "black" }}>ที่อยู่ฟาร์ม</FormLabel>
              <TextField
                id="farm_address"
                variant="outlined"
                disabled={disabled}
                onChange={setStateForm}
                className="textField-width"
                value={data[0].farm_address || " "}
                //label="ที่อยู่ฟาร์ม"
                size="small"
              />{" "}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "black" }}>เบอร์โทรติดต่อ</FormLabel>
              <TextField
                id="phone_num"
                variant="outlined"
                disabled={disabled}
                onChange={setStateForm}
                className="textField-width"
                value={data[0].phone_num || "ไม่ระบุ"}
                //label="เบอร์โทรติดต่อ"
                size="small"
              />{" "}
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
           
          </Grid>
          <Grid item xs={2}>
            <Button
            disabled={disabled}
              onClick={handleClicktrue}
              style={{ outline: "none", marginLeft: "220%" }}
              variant="contained"
              color="primary"
              className="textField-width"
              startIcon={<SaveIcon />}
            >
              บันทึก
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={handleClickfalse}
              style={{ outline: "none", marginLeft: "220%" }}
              variant="contained"
              color="secondary"
              className="textField-width"
              startIcon={<SaveIcon />}
            >
              แก้ไข
            </Button>{" "}
          </Grid>
         
          </Grid>
      </Paper>
    </div>
  );
}
