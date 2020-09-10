import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Button, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export function ListTeam() {
  const classes = useStyles();

  return (
    <div>
    <Paper
            elevation={3}
            square
            style={{
              color: "#fff",
              width: "25%",
              backgroundColor: "#ec407a",
              minWidth: "400px",
              padding: "12px",
              fontSize: "22px"
            }}
          >
            {" "}
           สมาชิกในระบบ
          </Paper>
    <Paper >
    <List className={classes.root}>
      <ListItem divider>
        <ListItemText primary="UserDeme01" secondary="เจ้าของฟาร์ม" />
        <Button   style={{color:"green",outline:"none"}}>ยืนยันแล้ว</Button>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="UserDemo02" secondary="คนงาน" />
        <Button   style={{color:"green",outline:"none"}}>ยืนยันแล้ว</Button>
      </ListItem>
      <ListItem  divider>
        <ListItemText primary="UserDemo03" secondary="สัตวแพท์" />
        <Button color="secondary" variant="outlined" style={{outline:"none"}}>รอการยืนยัน</Button>
      </ListItem>
    </List></Paper></div>
  );
}
