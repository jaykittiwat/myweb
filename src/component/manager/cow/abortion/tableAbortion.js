import React from "react";
import "./styleAbor.css";
import "./../CowStyle.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {CircularProgress,Button,Grid,FormLabel,FormGroup,TextField,Paper} from "@material-ui/core";
import axios from "axios";

export default function TableAbortion(props) {
  const [selectedId, setSelectedId] = React.useState("");
  const [top100Films, settop100Films] = React.useState([]);
  const [dataCalve, setDataCalve] = React.useState([]);
  const [dataBreed, setDataBreed] = React.useState([{}]);
  const [num, setNum] = React.useState("");
  const [note, setNote] = React.useState("");
  const [dateAbortion, setDateAbortion] = React.useState("");
  const [opa, setOpa] = React.useState("");
  const [rec, setRec] = React.useState("");
  const [showDateInduction, setShowDateInduction] = React.useState("");
  const [dateInduction, setDateInduction] = React.useState("");
  React.useEffect(() => {
    settop100Films(props.posts.valuesNoti);
    setOpa(props.posts.fname);
    setRec(props.posts.fname);
  }, [props]);

  const setDatesync = (e) => {
    const date = new Date(e.target.value);
    const newdate = new Date(date);
    newdate.setDate(newdate.getDate() + 61);
    let dd = newdate.getDate();
    let mm = newdate.getMonth() + 1;
    let yyyy = newdate.getFullYear();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }
    const nextmissionday = yyyy + "-" + mm + "-" + dd;
    const setnextmissionday = dd + "-" + mm + "-" + yyyy;
    setDateAbortion(e.target.value);
    setShowDateInduction(setnextmissionday);
    setDateInduction(nextmissionday);
  };
  const setid = (newValue) => {
    axios
      .get(
        "https://aipcattle.herokuapp.com/cattle/checkClave/" +
          props.posts.UID +
          "/" +
          newValue
      )
      .then((res) => {
        setDataCalve(res.data[1]);
      })
      .then(() => {
        axios
          .get(
            "https://aipcattle.herokuapp.com/breed/lasttime/" +
              props.posts.UID +
              "/" +
              newValue
          )
          .then((res) => {
            const x = res.data[1];
            setDataBreed(x);
          })
          .then(() => {
            axios
              .get(
                "https://aipcattle.herokuapp.com/abortion/history/" +
                  props.posts.UID +
                  "/" +
                  newValue
              )
              .then((res) => {
                const result = res.data.length;
                setNum(result.toString());
              });
          });
      });
    setSelectedId(newValue);
  };
  const saveDataToInduction = () => {
   
    axios
      .post("https://aipcattle.herokuapp.com/abortion/" + props.posts.UID, {
        alert_sync: "61",
        dam_id: selectedId,
        date: dateAbortion,
        note: note,
        number_of_breeding: dataCalve.number_of_breeding,
        operator: opa,
        recoder: rec,
      })
      .then(() => {
        axios.post(
          "https://aipcattle.herokuapp.com/notification/" +
            props.posts.UID +
            "/" +
            dateInduction,
          {
            date: dateInduction,
            id_cattle: selectedId,
            type: "เหนี่ยวนำกลับสัด",
          }
        ).then(() => {
          axios.post("https://aipcattle.herokuapp.com/cattle/status2/" + props.posts.UID+"/"+selectedId, {
            status: "โคแท้ง",
            process_date: dateAbortion,
          }).then(()=>{
            axios.delete("https://aipcattle.herokuapp.com/notification/delete2/"+props.posts.UID+"/"+selectedId)
          })
        });
      })
     
  };

  if (props.posts.loading) {
    return (
      <div className="container-fluid text-center" style={{ marginTop: "17%" }}>
        <CircularProgress size={40} />
        <h3>Loading.....</h3>
      </div>
    );
  }

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {" "}
      <Paper elevation={3}>
        <div className="text-header-ab">บันทึกโคแท้ง</div>
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel style={{ color: "#000" }}>หมายเลขโค</FormLabel>
            </FormGroup>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              getOptionSelected={(option, value) =>
                option.cattle_id === value.cattle_id
              }
              onChange={(event, newValue) => setid(newValue)}
              options={top100Films.map((option) => option.id_cattle)}
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
              <FormLabel style={{ color: "#000" }}>ท้องครั้งที่</FormLabel>
            </FormGroup>
            <TextField
              value={dataCalve.number_of_breeding || "-"}
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel style={{ color: "#000" }}>วันที่ผสม</FormLabel>
            </FormGroup>
            <TextField
              value={dataBreed[0].date_breeding || "-"}
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel style={{ color: "#000" }}>วิธีผสม</FormLabel>
            </FormGroup>
            <TextField
              value={
                dataBreed[0].semen !== undefined &&
                dataBreed[0].sire_id !== undefined
                  ? "ET"
                  : dataBreed[0].sire_id !== undefined
                  ? "พ่อพันธุ์"
                  : dataBreed[0].semen !== undefined
                  ? "น้ำเชื้อ"
                  : "ไม่ระบุ"
              }
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel style={{ color: "#000" }}>
                หมายเลขน้ำเชื้อ/พ่อพันธุ์
              </FormLabel>
            </FormGroup>
            <TextField
              value={dataBreed[0].semen || dataBreed[0].sire_id || "ไม่ระบุ"}
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel style={{ color: "#000" }}>จำนวนการแท้ง</FormLabel>
            </FormGroup>
            <TextField
              value={num || ""}
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
        </Grid>
        <div className="row">
          <div className="pad-l-20">กรอกข้อมูลการแท้ง</div>
          <div className="col">
            <hr />
          </div>
        </div>
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel style={{ color: "#000" }}> วันที่แท้ง</FormLabel>
            </FormGroup>
            <TextField
              onChange={(e) => setDatesync(e)}
              type="date"
              variant="outlined"
              className="textField-width"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormLabel style={{ color: "#000" }}>ผู้บันทึก</FormLabel>
            </FormGroup>
            <TextField
              value={opa}
              variant="outlined"
              className="textField-width"
              size="small"
              onChange={(e) => setOpa(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormLabel style={{ color: "#000" }}>สาเหตุ</FormLabel>
            </FormGroup>
            <TextField
              value={note}
              variant="outlined"
              className="textField-width"
              size="small"
              onChange={(e) => setNote(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} className="pad-10">
      
          <Grid item xs={12} >
            <Paper elevation={3} style={{ width: "100%",padding:"10px",textAlign:"center",fontSize:"24px" }}>
              เริ่มการเหนี่ยวนำ วันที่ {showDateInduction}
            </Paper>
          </Grid>
         
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              style={{ width: "250px", margin: "10px", outline: "none" }}
              onClick={() => saveDataToInduction()}
            >
              บันทึก
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Paper>
    </div>
  );
}
