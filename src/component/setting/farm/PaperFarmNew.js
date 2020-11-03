import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Paper,Grid,TextField,Button,Box,Typography,Tab,Tabs,AppBar} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import TableListEachSetting from "./tableListEachSetting";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "20px",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },

  HeaderSetting: {
    marginTop: "20px",
    color: "#fff",
    width: "100%",
    background:" linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
   
    padding: "12px",
    fontSize:"22px"
  },
  tapset: {
    fontSize: "18px",
    outline: "white",
    color: "black"
  }
}));

export default function PaperDrug(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [selectedSetting, setSelectedSetting] = React.useState("โรงเรือน");
    const [keyObjecselected, setkeyObjecselected] = React.useState("bigcorral");
    const [input, setinput] = React.useState("");

  const handleChange = (event, newValue) => {
    setinput("");
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
        "https://aipcattle.herokuapp.com/setting" +
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
    <div className="container-fluid">
      <div className={classes.root}>
        <Paper className={classes.HeaderSetting} elevation={3} square>
        ตั้งค่าระบบฟาร์ม
        </Paper>
        <AppBar position="static" style={{ marginTop: "3px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            style={{ backgroundColor: "white", color: "black" }}
          >
          <Tab  className={classes.tapset}
              label="โรงเรือน"
              {...a11yProps(0)}
              style={{ outline: "none" }}
            />
            <Tab  className={classes.tapset} label="คอก" {...a11yProps(1)} style={{ outline: "none" }} />
            <Tab  className={classes.tapset} label="ฝูง" {...a11yProps(2)} style={{ outline: "none" }} />
            <Tab  className={classes.tapset} label="สีโค" {...a11yProps(3)} style={{ outline: "none" }} />
            <Tab  className={classes.tapset}
              label="สายพันธุ์"
              {...a11yProps(4)}
              style={{ outline: "none" }}/>
          </Tabs>
        </AppBar>
        <Paper elevation={3} square style={{ marginTop: "1px" }}>
          <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    onChange={event => setinput(event.target.value)}
                    style={{ width: "99%" }}
                    type="text"
                    label="โรงเรือน"
                  />{" "}
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Button
                  disabled={input !== "" ? false : true}
                    onClick={() => addList()}
                    id="bigcorral"
                    style={{
                        outline: "none",
                        width: "250px",
                        height: "40px",
                        fontSize: "20px"
                      }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                บันทึก
                  </Button>
                </Grid>
              </Grid>
          </TabPanel>

          
          <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "99%" }}
                    type="text"
                    label="คอก"
                    onChange={event => setinput(event.target.value)}
                  />{" "}
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Button
                  disabled={input !== "" ? false : true}
                    onClick={addList}
                    id="corral"
                    style={{
                        outline: "none",
                        width: "250px",
                        height: "40px",
                        fontSize: "20px"
                      }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                    บันทึก
                  </Button>
                </Grid>
              </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "99%" }}
                    type="text"
                    label="ฝูง"
                    onChange={event => setinput(event.target.value)}
                  />{" "}
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Button
                  disabled={input !== "" ? false : true}
                    onClick={addList}
                    id="herd_num"
                    style={{
                        outline: "none",
                        width: "250px",
                        height: "40px",
                        fontSize: "20px"
                      }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                   บันทึก
                  </Button>
                </Grid>
              </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "99%" }}
                    type="text"
                    label="สี"
                    onChange={event => setinput(event.target.value)}
                  />{" "}
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Button
                  disabled={input !== "" ? false : true}
                    onClick={addList}
                    id="color"
                    style={{
                        outline: "none",
                        width: "250px",
                        height: "40px",
                        fontSize: "20px"
                      }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                 บันทึก
                  </Button>
                </Grid>
              </Grid>
          </TabPanel>
          <TabPanel value={value} index={4}>
          <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    style={{ width: "99%" }}
                    type="text"
                    label="สายพันธุ์"
                    onChange={event => setinput(event.target.value)}
                  />{" "}
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Button
                  disabled={input !=="" ? false : true}                
                    onClick={addList}
                    id="strian"
                    style={{
                        outline: "none",
                        width: "250px",
                        height: "40px",
                        fontSize: "20px"
                      }}
                    variant="contained"
                    color="primary"
                    startIcon={<SaveIcon />}
                  >
                  บันทึก
                  </Button>
                </Grid>
              </Grid>
          </TabPanel>
        </Paper>
      </div>
      <TableListEachSetting
        nameList={selectedSetting}
        data={props.posts}
        keyObjecselected={keyObjecselected}
        value={value}
      />
    </div>
  );
}
