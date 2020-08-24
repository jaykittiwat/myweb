import React from "react";
import "./../styleSetting.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormLabel, FormGroup, TextField } from "@material-ui/core";
import update from "immutability-helper";
import axios from "axios";

export default function PaperUser(props) {
  const [disabled, setEnabled] = React.useState(true);
  const [data, setData] = React.useState({});

  const handleClickfalse = event => {
    setEnabled(false);
  };
//<<<---------------------------<<<ยังไม่เสร็จ
  const handleClicktrue = event => {
    axios.post("http://localhost:4000/user/updataProfile",data).then(()=>{
      alert("บันทึกสำเร็จ");
     
    })
    setEnabled(true);
  };
  // ถ้ามีการเขียนแก้ไขข้อมูลผู้ใช้
  const dataUpdate = event => {
    const v = event.target.value;
    const ID = event.target.id;
    const collection = data; //{key:value}
    const newObj = update(collection,  { [ID]: { $set: v } } );
    setData(newObj);
  };
 

  React.useEffect(() => {
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
        <div className="text-header">ตั้งค่าผู้ใช้</div>

        <Grid container spacing={3} className="pad30">
          <Grid item xs={12}>
            <FormGroup>
              {" "}
              <FormLabel style={{ color: "black" }}>ชื่อผู้ใช้(ID)</FormLabel>
              <TextField
                value={data.user || " "}
                variant="outlined"
                disabled={disabled}
                type="text"
                className="textField-width"
                id="user"
                size="small"
                onChange={dataUpdate}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              {" "}
              <FormLabel style={{ color: "black" }}>รหัสผ่าน</FormLabel>
              <TextField
                value={data.pass || " "}
                disabled={disabled}
                type={disabled ? "password" : "text"}
                className="textField-width"
                id="pass"
                size="small"
                variant="outlined"
                onChange={dataUpdate}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              {" "}
              <FormLabel style={{ color: "black" }}>ชื่อ</FormLabel>
              <TextField
                value={data.fname || " "}
                variant="outlined"
                disabled={disabled}
                type="text"
                className="textField-width"
                id="fname"
                size="small"
                onChange={dataUpdate}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              {" "}
              <FormLabel style={{ color: "black" }}>นามสกุล</FormLabel>
              <TextField
                value={data.lname || " "}
                variant="outlined"
                disabled={disabled}
                type="text"
                className="textField-width"
                id="lname"
                size="small"
                onChange={dataUpdate}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "black" }}>ตำแหน่ง</FormLabel>
              <TextField
                disabled={disabled}
                value={data.privilege || " "}
                variant="outlined"
                type="text"
                className="textField-width"
                id="privilege"
                size="small"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              {" "}
              <FormLabel style={{ color: "black" }}>ที่อยู่</FormLabel>
              <TextField
                value={data.address || " "}
                variant="outlined"
                disabled={disabled}
                type="text"
                className="textField-width"
                id="address"
                size="small"
                onChange={dataUpdate}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "black" }}>เบอร์โทรติดต่อ</FormLabel>
              <TextField
                value={data.phone_num || " "}
                variant="outlined"
                disabled={disabled}
                type="text"
                className="textField-width"
                id="phone_num"
                size="small"
                onChange={dataUpdate}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "black" }}>อีเมล์ติดต่อ</FormLabel>
              <TextField
                value={data.email || " "}
                variant="outlined"
                disabled={disabled}
                type="text"
                className="textField-width"
                id="email"
                size="small"
                onChange={dataUpdate}
              />
            </FormGroup>
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
          </Grid>{" "}
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
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
