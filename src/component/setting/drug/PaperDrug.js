import React, { useState } from "react";
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
import update from "immutability-helper";
import axios from "axios";
import TableList from "./tableList";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
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
    width: "25%",
    minWidth: "400px",
    backgroundColor: "#2979ff",
    padding: "12px",
    fontSize: "22px"
  },
  tapset: {
    fontSize: "18px",
    outline: "white",
    color: "black"
  }
}));
const initialState_drug = {
  common_drug: " ",
  dosage: " ",
  drug_name: "",
  exp_date: " ",
  mfd_date: " ",
  number: 1
};
const initialState_vaccine = {
  common_vaccine: " ",
  dosage: " ",
  vaccine_name: "",
  exp_date_vaccine: " ",
  mfd_date_vaccine: " ",
  number: 1
};
const initialState_promaintain = {
  pro_maintain: "",
  note: " "
};
const initialState_prosync = {
  pro_sync: "",
  note: " "
};
export default function PaperDrug(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [drug, setdrug] = useState(initialState_drug);
  const [vaccine, setvaccine] = useState(initialState_vaccine);
  const [maintain, setmaintain] = useState(initialState_promaintain);
  const [prosync, setprosync] = useState(initialState_prosync);
  const [keyObjecselected, setkeyObjecselected] = useState("drug");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setdrug(initialState_drug);
    setvaccine(initialState_vaccine);
    setmaintain(initialState_promaintain);
    setprosync(initialState_prosync);
  };
  const setStateOncheng = event => {
    const v = event.target.value;
    const ID = event.target.id;
    if (value === 0) {
      const collection = drug; //{key:value}
      const newObj = update(collection, { [ID]: { $set: v } });
      setdrug(newObj);
      setkeyObjecselected("drug");
    }
    if (value === 1) {
      const collection = vaccine; //{key:value}
      const newObj = update(collection, { [ID]: { $set: v } });
      setvaccine(newObj);
      setkeyObjecselected("vaccine");
    }
    if (value === 2) {
      const collection = maintain; //{key:value}
      const newObj = update(collection, { [ID]: { $set: v } });
      setmaintain(newObj);
      setkeyObjecselected("program_maintain");
    }
    if (value === 3) {
      const collection = prosync; //{key:value}
      const newObj = update(collection, { [ID]: { $set: v } });
      setprosync(newObj);
      setkeyObjecselected("program_sync");
    }
  };

  async function saveData() {
    if (value === 0) {
      const res = await axios.post(
        "http://localhost:4000/setting" +
          keyObjecselected +
          "/" +
          keyObjecselected +
          "/" +
          props.posts.UID,
        drug
      );
      if (res.status === 200) {
        alert("บันทึกสำเร็จ   status:" + res.status);
        window.location.reload();
      }
    }
    if (value === 1) {
      const res = await axios.post(
        "http://localhost:4000/setting" +
          keyObjecselected +
          "/" +
          keyObjecselected +
          "/" +
          props.posts.UID,
        vaccine
      );
      if (res.status === 200) {
        alert("บันทึกสำเร็จ   status:" + res.status);
        window.location.reload();
      }
    }
    if (value === 2) {
      const res = await axios.post(
        "http://localhost:4000/setting" +
          keyObjecselected +
          "/" +
          keyObjecselected +
          "/" +
          props.posts.UID,
        maintain
      );
      if (res.status === 200) {
        alert("บันทึกสำเร็จ   status:" + res.status);
        window.location.reload();
      }
    }
    if (value === 3) {
      const res = await axios.post(
        "http://localhost:4000/setting" +
          keyObjecselected +
          "/" +
          keyObjecselected +
          "/" +
          props.posts.UID,
        prosync
      );
      if (res.status === 200) {
        alert("บันทึกสำเร็จ   status:" + res.status);
        window.location.reload();
      }
    }
  }
  const [medic, setMedic] = useState([
    {
      item: ""
    }
  ]);
  const [pro_maintain, setpro_maintain] = useState([]);
  const addtable = event => {
    setMedic([
      ...medic,
      {
        item: ""
      }
    ]);
  };
  const deleteItem = index => {
    const result = medic.filter(results => results !== medic[index]);
    //console.log(result);
    setMedic(result);
  };
  const showTable = () => {
    return medic.map((medics, index) => (
      <Paper key={index} style={{backgroundColor:"#f4f4f4"}}>
        <Grid container>
        <Grid item xs={1} style={{textAlign:"right",marginTop:"16px",marginRight:"5px"}}>
         อีก
          </Grid>
          <Grid item xs={1}>
          <TextField
              style={{ width: "95%" }}
              id="detail"
            label="จำนวนวัน"
              
              size="small"
            />
          </Grid>
          <Grid item xs={9}>
            <TextField
              style={{ width: "100%" }}
              id="detail"
             
              label="รายละเอียด"
              size="small"
            />
          </Grid>
          
            <IconButton
              aria-label="delete"
              color="secondary"
              style={{ outline: "none" }}
              onClick={() => deleteItem(index)}
            >
              <DeleteIcon />
            </IconButton>
          
        </Grid>
      </Paper>
    ));
  };

  return (
    <div className="container-fluid">
      <div className={classes.root}>
        <Paper className={classes.HeaderSetting} elevation={3} square>
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
                  onChange={setStateOncheng}
                  style={{ width: "49%" }}
                  type="text"
                  id="drug_name"
                  label="ชื่อยา"
                  size="small"
                />{" "}
                <TextField
                  onChange={setStateOncheng}
                  type="text"
                  style={{ width: "49%" }}
                  id="common_drug"
                  label="ชื่อสามามัญ"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={setStateOncheng}
                  style={{ width: "49%" }}
                  type="text"
                  id="dosage"
                  label="ปริมาณยา(มิลลิลิตร)"
                  size="small"
                />{" "}
                <TextField
                  onChange={setStateOncheng}
                  style={{ width: "49%" }}
                  type="text"
                  id="number"
                  label="จำนวน"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={setStateOncheng}
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
                  onChange={setStateOncheng}
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
                  disabled={drug.drug_name !== "" ? false : true}
                  onClick={saveData}
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
                  onChange={setStateOncheng}
                  style={{ width: "49%" }}
                  type="text"
                  id="vaccine_name"
                  label="ชื่อยา"
                  size="small"
                />{" "}
                <TextField
                  onChange={setStateOncheng}
                  type="text"
                  style={{ width: "49%" }}
                  id="common_vaccine"
                  label="ชื่อสามามัญ"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={setStateOncheng}
                  style={{ width: "49%" }}
                  type="text"
                  id="dosage"
                  label="ปริมาณยา(มิลลิลิตร)"
                  size="small"
                />{" "}
                <TextField
                  style={{ width: "49%" }}
                  onChange={setStateOncheng}
                  type="text"
                  id="number"
                  label="จำนวน"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={setStateOncheng}
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
                  onChange={setStateOncheng}
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
                  disabled={vaccine.vaccine_name !== "" ? false : true}
                  onClick={saveData}
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
                  onChange={setStateOncheng}
                  style={{ width: "100%" }}
                  type="text"
                  id="pro_maintain"
                  label="ชื่อโปรแกรมการบำรุง"
                  size="small"
                />{" "}
              </Grid>
              <Grid item xs={12} /*node------ */>
                หมายเหตุ
                <TextareaAutosize
                  onChange={setStateOncheng}
                  id="note"
                  style={{ width: "100%", outline: "none" }}
                  aria-label="minimum height"
                  rowsMin={2}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  disabled={maintain.pro_maintain !== "" ? false : true}
                  onClick={saveData}
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
                  onChange={setStateOncheng}
                  style={{ width: "100%" }}
                  type="text"
                  id="pro_sync"
                  label="ชื่อโปรแกรมการเหนี่ยวนำ"
                  size="small"
                />{" "}
              </Grid>
              <Grid item xs={12}>
                {showTable()}
                <Grid container> <Grid item xs={12} >
                  <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  style={{ outline: "none" ,marginLeft:'45%',marginTop:"10px"}}
                >
                  <AddIcon onClick={addtable} />
                </Fab></Grid></Grid>
                
              </Grid>
              <Grid item xs={12}>
                หมายเหตุ
                <TextareaAutosize
                  onChange={setStateOncheng}
                  id="note"
                  style={{ width: "100%", outline: "none" }}
                  aria-label="minimum height"
                  rowsMin={2}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  disabled={prosync.pro_sync !== "" ? false : true}
                  onClick={saveData}
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
      <TableList value={value} data={props.posts} />
    </div>
  );
}
