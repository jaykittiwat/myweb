import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button"
import "./styleReport.css"
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
        <Box p={1}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps=(index)=> {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function TableReport() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
    <div className="container">
    <Paper>
       <div className="text-header-report martop-10">ออกรายงาน</div>
    <div className={classes.root}>
    
      <Tabs
       indicatorColor="primary"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} style={{outline:"none"}}/>
        <Tab label="Item Two" {...a11yProps(1)} style={{outline:"none"}}/>
        <Tab label="Item Three" {...a11yProps(2)} style={{outline:"none"}}/>
        <Tab label="Item Four" {...a11yProps(3)} style={{outline:"none"}}/>
        <Tab label="Item Five" {...a11yProps(4)} style={{outline:"none"}}/>
        <Tab label="Item Six" {...a11yProps(5)} style={{outline:"none"}}/>
        <Tab label="Item Seven" {...a11yProps(6)} style={{outline:"none"}}/>
      </Tabs>
      <TabPanel value={value} index={0}   className="container-fluid text-center  " >
       <Button id="bt1" color="primary" variant="contained" style={{outline:"none",marginTop:"15%"}} >ออกรายงาน</Button>
      </TabPanel>
      <TabPanel value={value} index={1}   className="container-fluid text-center  " >
       <Button id="bt2" color="primary" variant="contained" style={{outline:"none",marginTop:"15%"}} >ออกรายงาน</Button>
      </TabPanel>
      <TabPanel value={value} index={2}   className="container-fluid text-center  " >
       <Button id="bt3" color="primary" variant="contained" style={{outline:"none",marginTop:"15%"}} >ออกรายงาน</Button>
      </TabPanel>
      <TabPanel value={value} index={3}   className="container-fluid text-center  " >
       <Button id="bt4" color="primary" variant="contained" style={{outline:"none",marginTop:"15%"}} >ออกรายงาน</Button>
      </TabPanel>
      <TabPanel value={value} index={4}   className="container-fluid text-center  " >
       <Button id="bt5" color="primary" variant="contained" style={{outline:"none",marginTop:"15%"}} >ออกรายงาน</Button>
      </TabPanel>
      <TabPanel value={value} index={5}   className="container-fluid text-center  " >
       <Button id="bt6" color="primary" variant="contained" style={{outline:"none",marginTop:"15%"}} >ออกรายงาน</Button>
      </TabPanel>
      <TabPanel value={value} index={6}   className="container-fluid text-center  " >
       <Button id="bt7" color="primary" variant="contained" style={{outline:"none",marginTop:"15%"}} >ออกรายงาน</Button>
      </TabPanel>
    </div> </Paper></div>
  );
}

