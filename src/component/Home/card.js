import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop:"-30px",
    marginLeft:"80px"
  },
});

export  function Card1() {
  const classes = useStyles();


  return (
    <Card className={classes.root} variant="elevation">
      <CardContent style={{textAlign:"center",padding:"0"}}>
        <Typography variant="h1" >
          0
        </Typography>
        <Typography className={classes.pos} color="textSecondary" variant="h5">
          ตัว
        </Typography>
      </CardContent>
      <CardActions style={{padding:"0"}} >
          <List style={{width:'100%'}}><Divider/></List>
         
      </CardActions>
      <CardContent style={{textAlign:"right",padding:"0"}}><Button  style={{outline:"none",fontSize:"18px"}} color="primary">เพิ่มเติม</Button></CardContent>
      
    </Card>
  );
}
export  function Card2() {
    const classes = useStyles();
  
  
    return (
      <Card className={classes.root}variant="elevation">
         <CardContent style={{textAlign:"center",padding:"0"}}>
        <Typography variant="h1" >
          0
        </Typography>
        <Typography className={classes.pos} color="textSecondary" variant="h5">
          หลัง
        </Typography>
      </CardContent>
      <CardActions style={{padding:"0"}} >
          <List style={{width:'100%'}}><Divider/></List>
         
      </CardActions>
      <CardContent style={{textAlign:"right",padding:"0"}}><Button  style={{outline:"none",fontSize:"18px"}} color="primary">เพิ่มเติม</Button></CardContent>
      </Card>
    );
  }
  export  function Card3() {
    const classes = useStyles();
 
  
    return (
      <Card className={classes.root} variant="elevation">
        <CardContent style={{textAlign:"center",padding:"0"}}>
        <Typography variant="h1" >
          0
        </Typography>
        <Typography className={classes.pos} color="textSecondary" variant="h5">
          คอก
        </Typography>
      </CardContent>
      <CardActions style={{padding:"0"}} >
          <List style={{width:'100%'}}><Divider/></List>
         
      </CardActions>
      <CardContent style={{textAlign:"right",padding:"0"}}><Button  style={{outline:"none",fontSize:"18px"}} color="primary">เพิ่มเติม</Button></CardContent>
      </Card>
    );
  }
  export  function Card4() {
    const classes = useStyles();
    
  
    return (
      <Card className={classes.root} variant="elevation">
       <CardContent style={{textAlign:"center",padding:"0"}}>
        <Typography variant="h1" >
          0
        </Typography>
        <Typography className={classes.pos} color="textSecondary" variant="h5">
          ฝูง
        </Typography>
      </CardContent>
      <CardActions style={{padding:"0"}} >
          <List style={{width:'100%'}}><Divider/></List>
         
      </CardActions>
      <CardContent style={{textAlign:"right",padding:"0"}}><Button  style={{outline:"none",fontSize:"18px"}} color="primary">เพิ่มเติม</Button></CardContent>
      </Card>
    );
  }