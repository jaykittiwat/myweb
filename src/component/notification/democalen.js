import React from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import DataCell from './DataCell.js';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),

    },
  },
 small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

}));

const alertType = [{
  id: 1,
  color: '#ffc400',//อีก 2 วัน
}, {
  id: 2,
  color: '#00c853',// อีก 1 วัน
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
    <Paper elevation={3}  style={{height:"96%" ,marginTop: "20px", zIndex: "-1",padding:"10px",background: "linear-gradient(0deg, rgba(0,45,154,1) 0%, rgba(7,135,217,1) 100%)"}} >
    <Scheduler
    editing={false}
    dataCellComponent={DataCell}
      dataSource={data}
      views={['agenda','month']}
      defaultCurrentView="month"
      defaultCurrentDate={currentDate}
      showAllDayPanel={true}
      firstDayOfWeek={0}
      startDayHour={1}
      endDayHour={24}
      height={610}
    >
   <Resource
   
        label="alertTypeID"
        fieldExpr="alertTypeID"
        dataSource={alertType}
        allowMultiple={false}
      />
      
    </Scheduler>
 
    <div className={classes.root}>
      <Avatar className={classes.small} sizes=" m" style={{backgroundColor:"#ff1744"}} >{""}</Avatar><div  style={{fontSize:"18px",color:"#fff"}}>วันที่กำหนด</div>
      <Avatar className={classes.small}  style={{backgroundColor:"#00c853"}}>{""}</Avatar><div style={{fontSize:"18px",color:"#fff"}}>อีก 1 วัน</div>
    
      <Avatar className={classes.small}  style={{backgroundColor:"#ffc400"}}>{""}</Avatar><div  style={{fontSize:"18px",color:"#fff"}}>อีก 2 วัน</div>
      <Avatar className={classes.small}  style={{backgroundColor:"#6a1b9a"}}>{""}</Avatar><div  style={{fontSize:"18px",color:"#fff"}}>เลยกำหนด</div>
    </div>
    </Paper >
  );
}