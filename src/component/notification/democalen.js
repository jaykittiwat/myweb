import React from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),

    },
  },
 small: {
    width: theme.spacing(1),
    height: theme.spacing(1),
  },

}));


const alertType = [{
  id: 1,
  color: '#ffd600',//อีก 2 วัน
}, {
  id: 2,
  color: '#76ff03',// อีก 1 วัน
}, {
  id: 3,
  color: '#ff1744',//อีก 0 วัน
}, {
  id: 4,
  color: '#6a1b9a',
}];


 
const currentDate = new Date();

export default function App (props) {
  const classes = useStyles()
  const [data,setData]=React.useState([])
  React.useEffect(() => {
   
    setData(props.Data)
  }, [props]);
  return (

    <Paper elevation={1} square style={{height:"96%" ,marginTop: "20px", zIndex: "-1",padding:"10px"}} >
    <Scheduler
      dataSource={data}
      views={['month']}
      defaultCurrentView="month"
      defaultCurrentDate={currentDate}
      showAllDayPanel={true}
      firstDayOfWeek={0}
      startDayHour={1}
      endDayHour={24}
      height={450}
    >
   <Resource
   
        label="alertTypeID"
        fieldExpr="alertTypeID"
        dataSource={alertType}
        allowMultiple={false}
      />
      
    </Scheduler>
 
    <div className={classes.root}>
      <Avatar className={classes.small} sizes=" m" style={{backgroundColor:"#ff1744"}} >{""}</Avatar><div  style={{fontSize:"12px"}}>วันที่กำหนด</div>
      <Avatar className={classes.small}  style={{backgroundColor:"#76ff03"}}>{""}</Avatar><div style={{fontSize:"12px"}}>อีก 1 วัน</div>
    
      <Avatar className={classes.small}  style={{backgroundColor:"#ffd600"}}>{""}</Avatar><div  style={{fontSize:"12px"}}>อีก 2 วัน</div>
      <Avatar className={classes.small}  style={{backgroundColor:"#6a1b9a"}}>{""}</Avatar><div  style={{fontSize:"12px"}}>เลยกำหนด</div>
    </div>
    </Paper >
  );
}