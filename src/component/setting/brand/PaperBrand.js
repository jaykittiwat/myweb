import React, { useEffect } from "react";
import "./../styleSetting.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import SaveIcon from "@material-ui/icons/Save";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FormLabel, FormGroup, TextField,Button} from "@material-ui/core";
import update from "immutability-helper";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import ImageUploader from "react-images-upload";
import firebase from "./../../../backEnd/firebase";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "5px"
  },
  headerbrand: {
    marginTop: "20px",
    color: "#fff",
    width: "100%",
    background:" linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
    padding: "12px",
    fontSize: "22px"
  },
  boxInput: {
    width: "95%"
  }
}));

export default function PaperBrand(props) {
  const [data, setData] = React.useState([""]);
  const [disabled, setEnabled] = React.useState(true);
  const classes = useStyles();
  const [pictures, setpictures] = React.useState([]);
  const [picturesURL, setpicturesURL] = React.useState([]);
  const onDrop = (pictureFile, pictureDataURLs) => {
    setpictures(pictureFile);
    setpicturesURL(pictureDataURLs);
   
  };
 
  const handleClickfalse = event => {
    setEnabled(false);
  };
  const handleClicktrue = event => {
    if (pictures === []) {
      axios
      .post(
        "http://localhost:4000/settingbrand/brandUpdata/" +
          props.posts.UID +
          "/" +
          props.posts.key,
        data[0]
      )
      .then(res => {
        alert("บันทึกสำเร็จ");
      });
    setEnabled(true);
    } 
    if (pictures !== []) {
      firebase
      .storage()
      .ref("Photo/" +props.posts.UID +"/")
      .child("logo")
      .put(pictures[0]).then(()=>{
        axios
        .post(
          "http://localhost:4000/settingbrand/brandUpdata/" +
            props.posts.UID +
            "/" +
            props.posts.key,
          data[0]
        )
        .then(res => {
          alert("บันทึกสำเร็จ");
        });
      })
      setEnabled(true);
    }

  
  };
  const setStateForm = event => {
    const v = event.target.value;
    const ID = event.target.id;
    const collection = data; //[{key:value}]
    const newObj = update(collection, { 0: { [ID]: { $set: v } } });
    setData(newObj);
  };

  useEffect(() => {
    const callImg = () =>{
      firebase.storage().ref("Photo/"+props.posts.UID+"/").child("logo").getDownloadURL().then((url) =>{
        setpicturesURL([url])
      }).catch((error)=> {
        setpicturesURL(["https://www.flaticon.com/svg/static/icons/svg/685/685686.svg"])
      });
    }
    callImg()
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
    <div className="container-fluid">
 
      <Paper elevation={3} square className={classes.headerbrand}>
        ตั้งค่าแบรนด์
      </Paper>
      <Paper
      style={{ width: "100%", textAlign: "center", marginTop: "10px" }}
      elevation={0}
    >
      <img
        src={picturesURL}
        alt="imgbrand"
        style={{ width: "200px", height: "200px" }}
      />
    </Paper>

    <ImageUploader
      withIcon={false}
      buttonText="โลโก้ฟาร์ม"
      onChange={onDrop}
      imgExtension={[".jpg", ".gif", ".png", ".gif"]}
      maxFileSize={5242880}
    />
      <Paper elevation={3} square className={classes.root}>
        <Grid container spacing={3}  style={{padding:"20px"}}>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "black" }}>ชื่อฟาร์มภาษไทย</FormLabel>
              <TextField
                className={classes.boxInput}
                id="farm_name_TH"
                onChange={setStateForm}
                disabled={disabled}
                value={data[0].farm_name_TH || " "}
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
                className={classes.boxInput}
                id="farm_name_EN"
                disabled={disabled}
                onChange={setStateForm}
                value={data[0].farm_name_EN || " "}
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
                className={classes.boxInput}
                id="farm_name_TH"
                onChange={setStateForm}
                disabled={disabled}
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
                className={classes.boxInput}
                id="farm_address"
                disabled={disabled}
                onChange={setStateForm}
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
                className={classes.boxInput}
                id="phone_num"
                disabled={disabled}
                onChange={setStateForm}
                value={data[0].phone_num || "ไม่ระบุ"}
                //label="เบอร์โทรติดต่อ"
                size="small"
              />{" "}
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
                fontSize: "20px"
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
                fontSize: "20px"
              }}
              variant="contained"
              color="secondary"
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
