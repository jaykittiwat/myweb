import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

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
          <Typography component={'span'}>{children}</Typography>
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
    fontSize: "25px",
    color: "#fff",
    width: "36%",
    padding: "10px",
    backgroundColor: "#2979ff"
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container">
      <div className={classes.root}>
        <Paper className={classes.HeaderSetting} elevation={3}>
          ตั้งค่าระบบยาและโปรแกรมการจัดการ
        </Paper>
        <AppBar position="static" style={{ marginTop: "3px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <Tab
              label="ยา"
              {...a11yProps(0)}
              className={classes.tapset}
              style={{ outline: "none" }}
            />
            <Tab
              label="วัคซีน"
              {...a11yProps(1)}
              className={classes.tapset}
              style={{ outline: "none" }}
            />
            <Tab
              label="โปรแกรมการบำรุง"
              {...a11yProps(2)}
              className={classes.tapset}
              style={{ outline: "none" }}
            />
            <Tab
              label="โปรแกรมการเหนี่ยวนำ"
              {...a11yProps(3)}
              className={classes.tapset}
              style={{ outline: "none" }}
            />
          </Tabs>
        </AppBar>
        <Paper elevation={3} square style={{ marginTop: "1px" }}>
          <TabPanel value={value} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "49%" }}
                  type="text"
                  id="drug_name"
                  label="ชื่อยา"
                  size="small"
                />{" "}
                <TextField
                  type="text"
                  style={{ width: "49%" }}
                  id="common_drug"
                  label="ชื่อสามามัญ"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "49%" }}
                  type="text"
                  id="dosage"
                  label="ปริมาณยา(มิลลิลิตร)"
                  size="small"
                />{" "}
                <TextField
                  style={{ width: "49%" }}
                  type="text"
                  id="drug_num"
                  label="จำนวน"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "49%" }}
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
                  style={{ width: "49%" }}
                  id="exp_date"
                  label="วันหมดอายุ"
                  InputLabelProps={{
                    shrink: true
                  }}
                  size="small"
                />
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
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
                  style={{ width: "49%" }}
                  type="text"
                  id="vaccine_name"
                  label="ชื่อยา"
                  size="small"
                />{" "}
                <TextField
                  type="text"
                  style={{ width: "49%" }}
                  id="common_vaccine"
                  label="ชื่อสามามัญ"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "49%" }}
                  type="text"
                  id="vaccine_dosage"
                  label="ปริมาณยา(มิลลิลิตร)"
                  size="small"
                />{" "}
                <TextField
                  style={{ width: "49%" }}
                  type="text"
                  id="vaccine_num"
                  label="จำนวน"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  style={{ width: "49%" }}
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
                  style={{ width: "49%" }}
                  id="exp_date_vaccine"
                  label="วันหมดอายุ"
                  InputLabelProps={{
                    shrink: true
                  }}
                  size="small"
                />
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
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
                  style={{ width: "100%" }}
                  type="text"
                  id="pro_maintain"
                  label="ชื่อโปรแกรมการบำรุง"
                  size="small"
                />{" "}
              </Grid>

              <Grid item xs={12} /*node------ */>
          
                <TextareaAutosize
                  style={{ width: "100%", outline: "none" }}
                  aria-label="minimum height"
                  rowsMin={2}
                />
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
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
                  style={{ width: "100%" }}
                  type="text"
                  id="pro_sync"
                  label="ชื่อโปรแกรมการเหนี่ยวนำ"
                  size="small"
                />{" "}
              </Grid>

              <Grid item xs={12}>
               
                <TextareaAutosize
                  style={{ width: "100%", outline: "none" }}
                  aria-label="minimum height"
                  rowsMin={2}
                />
              </Grid>

              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
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
    </div>
  );
}
