import React from "react";
import "./../styleSetting.css";
import {Paper,Grid,Button,CircularProgress,FormLabel, FormGroup, TextField} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import update from "immutability-helper";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5px",
  },
  headerbrand: {
    marginTop: "20px",
    color: "#fff",
    width: "100%",
    background:
      " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",

    padding: "12px",
    fontSize: "22px",
  },
  boxInput: {
    width: "95%",
  },
}));
export default function PaperUser(props) {
  const [disabled, setEnabled] = React.useState(true);
  const [data, setData] = React.useState({});
  const classes = useStyles();

  const handleClickfalse = (event) => {
    setEnabled(false);
  };
  //<<<---------------------------<<<ยังไม่เสร็จ
  const handleClicktrue = (event) => {
    axios.post("http://localhost:24559/user/updataProfile", data).then(() => {
      alert("บันทึกสำเร็จ");
    });
    setEnabled(true);
  };
  // ถ้ามีการเขียนแก้ไขข้อมูลผู้ใช้
  const dataUpdate = (event) => {
    const v = event.target.value;
    const ID = event.target.id;
    const collection = data; //{key:value}
    const newObj = update(collection, { [ID]: { $set: v } });
    setData(newObj);
  };

  React.useEffect(() => {
    setData(props.posts.data);
  }, [props]);
const upDateStatus=(index)=>{
  axios.post("http://localhost:24559/user/status/employee",{
    key:props.posts.employeeKey[index],privilege:props.posts.employeeData[index].vacancy
  }).then(()=>{
    window.location.reload()
  })
}
  if (props.posts.loading === true) {
    return (
      <div className="container-fluid text-center" style={{ marginTop: "17%" }}>
        <CircularProgress size={40} />
        <h3>Loading.....</h3>
      </div>
    );
  }
  return (
    <div className="container-fluid">
      <Grid container spacing={3} style={{ padding: "20px" }}>
        <Grid item xs={6}>
          <Paper elevation={3} square className={classes.headerbrand}>
            ตั้งค่าผู้ใช้
          </Paper>
          <Paper elevation={3} square className={classes.root}>
            <Grid
              item
              xs={12}
              style={{ paddingLeft: "25px", paddingTop: "25px" }}
            >
              <FormGroup>
                <FormLabel style={{ color: "black" }}>ชื่อผู้ใช้(ID)</FormLabel>
                <TextField
                  value={data.user || " "}
                  disabled={disabled}
                  type="text"
                  className={classes.boxInput}
                  id="user"
                  size="small"
                  onChange={dataUpdate}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ paddingLeft: "25px", paddingTop: "10px" }}
            >
              <FormGroup>
                <FormLabel style={{ color: "black" }}>รหัสผ่าน</FormLabel>
                <TextField
                  value={data.pass || " "}
                  disabled={disabled}
                  type={disabled ? "password" : "text"}
                  id="pass"
                  size="small"
                  onChange={dataUpdate}
                  className={classes.boxInput}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ paddingLeft: "25px", paddingTop: "10px" }}
            >
              <FormGroup>
                <FormLabel style={{ color: "black" }}>ชื่อ</FormLabel>
                <TextField
                  value={data.fname || " "}
                  disabled={disabled}
                  type="text"
                  id="fname"
                  size="small"
                  onChange={dataUpdate}
                  className={classes.boxInput}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ paddingLeft: "25px", paddingTop: "10px" }}
            >
              <FormGroup>
                <FormLabel style={{ color: "black" }}>นามสกุล</FormLabel>
                <TextField
                  value={data.lname || " "}
                  disabled={disabled}
                  type="text"
                  id="lname"
                  size="small"
                  onChange={dataUpdate}
                  className={classes.boxInput}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ paddingLeft: "25px", paddingTop: "10px" }}
            >
              <FormGroup>
                <FormLabel style={{ color: "black" }}>ตำแหน่ง</FormLabel>
                <TextField
                  disabled={disabled}
                  value={data.privilege || " "}
                  type="text"
                  id="privilege"
                  size="small"
                  className={classes.boxInput}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ paddingLeft: "25px", paddingTop: "10px" }}
            >
              <FormGroup>
                <FormLabel style={{ color: "black" }}>ที่อยู่</FormLabel>
                <TextField
                  value={data.address || " "}
                  disabled={disabled}
                  type="text"
                  id="address"
                  size="small"
                  onChange={dataUpdate}
                  className={classes.boxInput}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ paddingLeft: "25px", paddingTop: "10px" }}
            >
              <FormGroup>
                <FormLabel style={{ color: "black" }}>เบอร์โทรติดต่อ</FormLabel>
                <TextField
                  value={data.phone_num || " "}
                  disabled={disabled}
                  type="text"
                  id="phone_num"
                  size="small"
                  onChange={dataUpdate}
                  className={classes.boxInput}
                />
              </FormGroup>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ paddingLeft: "25px", paddingTop: "10px" }}
            >
              <FormGroup>
                <FormLabel style={{ color: "black" }}>อีเมล์ติดต่อ</FormLabel>
                <TextField
                  value={data.email || " "}
                  disabled={disabled}
                  type="text"
                  id="email"
                  size="small"
                  onChange={dataUpdate}
                  className={classes.boxInput}
                />
              </FormGroup>
            </Grid>

            <Grid item xs={12} align="center">
              <Button
                disabled={disabled}
                onClick={handleClicktrue}
                style={{
                  outline: "none",
                  width: "250px",
                  height: "40px",
                  fontSize: "20px",
                  margin: "15px",
                }}
                variant="contained"
                color="primary"
                className="textField-width"
                startIcon={<SaveIcon />}
              >
                บันทึก
              </Button>
              {"      "}
              <Button
                onClick={handleClickfalse}
                style={{
                  outline: "none",
                  width: "250px",
                  height: "40px",
                  fontSize: "20px",
                  margin: "15px",
                }}
                variant="contained"
                color="secondary"
                startIcon={<SaveIcon />}
              >
                แก้ไข
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} square className={classes.headerbrand}>
            คำขออนุมัติเข้าใช้งาน
          </Paper>
          <Paper elevation={3}  square style={{ padding: "15px" }}>
            {props.posts.employeeData.map((i,index) => {
              return (
                <Paper elevation={3} style={{ marginTop: "5px",padding:'10px' }} key={index}>
                  ID: {i.user} <span style={{marginLeft:"30px" }}>ชื่อ:</span>{i.fname + " " + i.lname} <span style={{marginLeft:"30px" }}>ตำแหน่ง:</span>
                  {i.vacancy} <span style={{marginLeft:"30px" }}>สถานะ:</span>
                  {i.privilege === "ยังไม่ได้อนุมัติ" ? (
                    <span style={{ color: "red"}}>{i.privilege}</span>
                  ) : (
                    <span style={{ color: "green" }}>อนุมัติแล้ว</span>
                  )}
                  {i.privilege === "ยังไม่ได้อนุมัติ" ? (
                         <Button variant="contained" color="primary" style={{marginLeft:"30px"}} onClick={()=>upDateStatus(index)}>
                      อนุมัติ
                    </Button>
                  ) : (
                    ""
                  )}
                </Paper>
              );
            })}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
