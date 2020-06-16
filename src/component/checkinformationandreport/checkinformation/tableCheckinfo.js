import React from "react";
import "./CheckinfoStyle.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TableCheckinfo() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div className="container martop-10">
      <Paper elevation={3} >
        <div className="text-header-treat">ตรวจสอบข้อมูล</div>

        <div className={classes.root}>
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="จำนวนโคภายในฟาร์ม" {...a11yProps(0)} style={{outline: "none" }}/>
          <Tab label="จำนวนโคแต่ละสายพันธุ์" {...a11yProps(1)} style={{outline: "none" }}/>
          <Tab label="จำนวนการเกิดและการแท้ง" {...a11yProps(2)} style={{outline: "none" }}/>
          <Tab label="จำนวนการเกิดโรค" {...a11yProps(3)} style={{outline: "none" }}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
        
      </Paper>
    </div>
  );
}

/*<div><Grid container spacing={3} className="pad-10-treat">
         
         <Grid item xs={6} spacing={3} container> //1
           {" "}
           <Grid item xs={12}>
             <FormControl
               variant="outlined"
               className="textField-w-treat"
               size="small"
             >
               <InputLabel id="demo-simple-select-outlined-label">
                 ประเภทโค
               </InputLabel>
               <Select
                 labelId="demo-simple-select-outlined-label"
                 id="demo-simple-select-outlined"
                 value={age}
                 onChange={handleChange}
                 label="Age"
               >
                 <MenuItem value="">
                   <em>None</em>
                 </MenuItem>
                 <MenuItem value={10}>พ่อ</MenuItem>
                 <MenuItem value={20}>แม่</MenuItem>
                 <MenuItem value={30}>ลูก</MenuItem>
               </Select>
             </FormControl>
           </Grid>
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined3"
               label="หมายเลขโค"
               variant="outlined"
               size="small"
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined5"
               label="ประเภทการรักษา"
               variant="outlined"
               size="small"
             />
           </Grid>{" "}
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined7"
               label="ชื่อโรค"
               variant="outlined"
               size="small"
             />
           </Grid>{" "}
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined9"
               label="วันที่"
               variant="outlined"
               size="small"
             />
           </Grid>{" "}
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined11"
               label="เวลา"
               variant="outlined"
               size="small"
             />
           </Grid>
         </Grid>
         <Grid item xs={6} spacing={3} container> //2
           {" "}
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined80"
               label="ระบุอาการ"
               variant="outlined"
               size="small"
             />
           </Grid>
           <Grid item xs={12}>
             <FormControl
               variant="outlined"
               className="textField-w-treat"
               size="small"
             >
               <InputLabel id="demo-simple-select-outlined-label">
                 รายการยา
               </InputLabel>
               <Select
                 labelId="demo-simple-select-outlined-label"
                 id="demo-simple-select-outlined2"
                 value={age}
                 onChange={handleChange}
                 label="รายการยา"
               >
                 <MenuItem value="">
                   <em>None</em>
                 </MenuItem>
                 <MenuItem value={10}>Ten</MenuItem>
                 <MenuItem value={20}>Twenty</MenuItem>
                 <MenuItem value={30}>Thirty</MenuItem>
               </Select>
             </FormControl>
           </Grid>{" "}
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined6"
               label="ติดตามอาการ(วัน)"
               variant="outlined"
               size="small"
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined8"
               label="ผู้บันทึก"
               variant="outlined"
               size="small"
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined81"
               label="ผู้ปฏิบัติ"
               variant="outlined"
               size="small"
             />
           </Grid>
           <Grid item xs={12}>
             <TextField
               className="textField-w-treat"
               id="outlined82"
               label="หมายเหตุ"
               variant="outlined"
               size="small"
             />
           </Grid>
         </Grid>
      

         <Grid item xs={4}>
           <Button
             style={{ outline: "none", marginLeft: "98%" }}
             variant="contained"
             color="primary"
             className="textField-w-treat "
             startIcon={<SaveIcon />}
           >
             บันทึก
           </Button>
         </Grid>  
       </Grid></div>*/