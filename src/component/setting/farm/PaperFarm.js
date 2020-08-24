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
import TableListEachSetting from "./tableListEachSetting";
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
    height: 260
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

export default function PaperFarm(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [selectedSetting, setSelectedSetting] = React.useState("โรงเรือน");
  const [keyObjecselected, setkeyObjecselected] = React.useState("bigcorral");
  const [input, setinput] = React.useState(" ");
  const handleChange = (event, newValue) => {
    setinput(" ");
    if (newValue === 0) {
      setSelectedSetting("โรงเรือน");
      setkeyObjecselected("bigcorral");
    }
    if (newValue === 1) {
      setSelectedSetting("คอก");
      setkeyObjecselected("corral");
    }
    if (newValue === 2) {
      setSelectedSetting("ฝูง");
      setkeyObjecselected("herd_num");
    }
    if (newValue === 3) {
      setSelectedSetting("สี");
      setkeyObjecselected("color");
    }
    if (newValue === 4) {
      setSelectedSetting("สายพันธุ์");
      setkeyObjecselected("strian");
    }
    setValue(newValue);
  };
  const addList = () => {
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
        <div className="text-header">ตั้งค่าระบบฟาร์ม</div>
        <div className={classes.root}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              label="โรงเรือน"
              {...a11yProps(0)}
              style={{ outline: "none" }}
            />
            <Tab label="คอก" {...a11yProps(1)} style={{ outline: "none" }} />
            <Tab label="ฝูก" {...a11yProps(2)} style={{ outline: "none" }} />
            <Tab label="สีโค" {...a11yProps(3)} style={{ outline: "none" }} />
            <Tab
              label="สายพันธุ์"
              {...a11yProps(4)}
              style={{ outline: "none" }}
            />
          </Tabs>
          <TabPanel value={value} index={0} className="container-fluid">
            <Paper
              elevation={0}
              style={{ textAlign: "center", marginTop: "5%" }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    onChange={event => setinput(event.target.value)}
                    style={{ width: "90%" }}
                    type="text"
                    label="โรงเรือน"
                  />{" "}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={() => addList()}
                    id="bigcorral"
                    style={{ outline: "none", width: "150px" }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                    เพิ่ม
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1} className="container-fluid">
            <Paper
              elevation={0}
              style={{ textAlign: "center", marginTop: "5%" }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "90%" }}
                    type="text"
                    label="คอก"
                    onChange={event => setinput(event.target.value)}
                  />{" "}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={addList}
                    id="corral"
                    style={{ outline: "none", width: "150px" }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                    เพิ่ม
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={2} className="container-fluid">
            <Paper
              elevation={0}
              style={{ textAlign: "center", marginTop: "5%" }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "90%" }}
                    type="text"
                    label="ฝูง"
                    onChange={event => setinput(event.target.value)}
                  />{" "}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={addList}
                    id="herd_num"
                    style={{ outline: "none", width: "150px" }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                    เพิ่ม
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={3} className="container-fluid">
            <Paper
              elevation={0}
              style={{ textAlign: "center", marginTop: "5%" }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "90%" }}
                    type="text"
                    label="สี"
                    onChange={event => setinput(event.target.value)}
                  />{" "}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={addList}
                    id="color"
                    style={{ outline: "none", width: "150px" }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                    เพิ่ม
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={4} className="container-fluid">
            <Paper
              elevation={0}
              style={{ textAlign: "center", marginTop: "5%" }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "90%" }}
                    type="text"
                    label="สายพันธุ์"
                    onChange={event => setinput(event.target.value)}
                  />{" "}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={addList}
                    id="strian"
                    style={{ outline: "none", width: "150px" }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                    เพิ่ม
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </TabPanel>
        </div>
      </Paper>
      <TableListEachSetting
        nameList={selectedSetting}
        data={props.posts}
        keyObjecselected={keyObjecselected}
      />
    </div>
  );
}
