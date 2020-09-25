import React from "react";
import {makeStyles,Paper,} from "@material-ui/core";
import TableDetailclaf from'./table'

const useStyles = makeStyles({
  table: {
    marginTop: "3px",
    width: "100%"
  },
  HeaderSetting: {
    marginTop: "20px",
    color: "#fff",
    background: " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
    width:"100%",
    padding: "12px",
    fontSize: "22px"
  }
});

export default function TableClaf(props) {
  const classes = useStyles();

  return (
    <Paper >
      <Paper className={classes.HeaderSetting} elevation={3} square>
        จัดการลูกโค
      </Paper>
      <Paper elevation={3} className={classes.table}>
       <TableDetailclaf posts={props.posts}/>
      </Paper>
    </Paper>
  );
}



