import React from "react";
import "./../styleSetting.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import axios from "axios";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "auto"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "250px"
  }
}));

export default function PaperDrug(props) {
  
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [input, setinput] = React.useState({}); //<<<--------------------------set is Object
  const [note, setnote] = React.useState("หมายเหตุ");
  const [note_pro_sync, setnote_pro_sync] = React.useState("หมายเหตุ");
  const [disabled, setEnabled] = React.useState(true);
  const [keyObjecselected, setkeyObjecselected] = React.useState("drug");
  const [selectedSetting, setSelectedSetting] = React.useState("ยา");

  const handleChange = (event, newValue) => {
    if (newValue === 0) {
      setSelectedSetting("ยา");
      setkeyObjecselected("drug");
    }
    if (newValue === 1) {
      setSelectedSetting("วัคซีน");
      setkeyObjecselected("vaccine");
    }
    if (newValue === 2) {
      setSelectedSetting("โปรแกรมบำรุง");
      setkeyObjecselected("pro_maintain");
    }
    if (newValue === 3) {
      setSelectedSetting("โปรแกรมเหี่ยวนำ");
      setkeyObjecselected("pro_sync");
    }

    setValue(newValue);
  };
const inputDataSetting = (event) =>{
console.log(event.target.index)
}
  const addList = event => {
    const data = { [keyObjecselected]: input };
    axios
      .post(
        "http://localhost:4000/setting" +
          keyObjecselected +
          "/" +
          keyObjecselected +
          "/" +
          props.posts.UID,
        data
      )
      .then(res => {
        alert("บันทึกสำเร็จ   status:" + res.status);
        window.location.reload();
      });
  };
  return (
    <div className="container martop-10">
      <Paper elevation={3}>
        <div className="text-header">ตั้งค่าระบบยา</div>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="ยา" {...a11yProps(0)} style={{ outline: "none" }} />
            <Tab label="วัคซีน" {...a11yProps(1)} style={{ outline: "none" }} />
            <Tab
              label="โปรแกรมบำรุง"
              {...a11yProps(2)}
              style={{ outline: "none" }}
            />
            <Tab
              label="โปรแกรมเหนี่ยวนำ"
              {...a11yProps(3)}
              style={{ outline: "none" }}
            />
          </Tabs>
          <TabPanel value={value} index={0} className="container-fluid">
            <Paper elevation={0} style={{ textAlign: "center" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="drug_name"
                    label="ชื่อยา"
                    size="small"
                  />{" "}
                  <TextField
                    type="text"
                    style={{ width: "40%" }}
                    id="common_drug"
                    label="ชื่อสามามัญ"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="dosage"
                    label="ปริมาณยา(มิลลิลิตร)"
                    size="small"
                  />{" "}
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="drug_num"
                    label="จำนวน"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "40%" }}
                    type="date"
                    id="mfd_date"
                    label="วันผลิต"
                    InputLabelProps={{
                      shrink: true
                    }}
                    size="small"
                  />

                  <TextField
                    type="date"
                    style={{ width: "40%" }}
                    id="exp_date"
                    label="วันหมดอายุ"
                    InputLabelProps={{
                      shrink: true
                    }}
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    onClick={() => addList()}
                    style={{ outline: "none", width: "150px" }}
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
          </TabPanel>

          <TabPanel value={value} index={1} className="container-fluid">
            <Paper elevation={0} style={{ textAlign: "center" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="vaccine_name"
                    label="ชื่อยา"
                    size="small"
                  />{" "}
                  <TextField
                    type="text"
                    style={{ width: "40%" }}
                    id="common_vaccine"
                    label="ชื่อสามามัญ"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="vaccine_dosage"
                    label="ปริมาณยา(มิลลิลิตร)"
                    size="small"
                  />{" "}
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="vaccine_num"
                    label="จำนวน"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "40%" }}
                    type="date"
                    id="mfd_date_vaccine"
                    label="วันผลิต"
                    InputLabelProps={{
                      shrink: true
                    }}
                    size="small"
                  />

                  <TextField
                    type="date"
                    style={{ width: "40%" }}
                    id="exp_date_vaccine"
                    label="วันหมดอายุ"
                    InputLabelProps={{
                      shrink: true
                    }}
                    size="small"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    onClick={() => addList()}
                    style={{ outline: "none", width: "150px" }}
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
          </TabPanel>

          <TabPanel value={value} index={2} className="container-fluid">
            <Paper elevation={0} style={{ textAlign: "center" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "80%" }}
                    type="text"
                    id="pro_maintain"
                    label="ชื่อโปแกรมการบำรุง"
                    size="small"
                  />{" "}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="pro_maintain_drug_name"
                    label="ชื่อยาที่ใช้"
                    size="small"
                  />{" "}
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="pro_maintain_grug_dosage"
                    label="ปริมาณ"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} /*node------ */>
                  <TextareaAutosize
                    style={{ width: "80%", outline: "none" }}
                    aria-label="minimum height"
                    rowsMin={2}
                    value={note}
                    onChange={e => setnote(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    onClick={() => addList()}
                    style={{ outline: "none", width: "150px" }}
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
          </TabPanel>

          <TabPanel value={value} index={3} className="container-fluid">
            <Paper elevation={0} style={{ textAlign: "center" }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "80%" }}
                    type="text"
                    id="pro_sync"
                    label="ชื่อโปแกรมการบำรุง"
                    size="small"
                  />{" "}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="pro_sync_drug_name"
                    label="ชื่อยาที่ใช้"
                    size="small"
                  />{" "}
                  <TextField
                    style={{ width: "40%" }}
                    type="text"
                    id="pro_sync_grug_dosage"
                    label="ปริมาณ"
                    size="small"
                  />
                </Grid>
                <Grid item xs={12} /*node------ */>
                  <TextareaAutosize
                    style={{ width: "80%", outline: "none" }}
                    aria-label="minimum height"
                    rowsMin={2}
                    value={note_pro_sync}
                    onChange={e => setnote_pro_sync(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    onClick={() => addList()}
                    style={{ outline: "none", width: "150px" }}
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
          </TabPanel>
        </div>
      </Paper>
    </div>
  );
}
