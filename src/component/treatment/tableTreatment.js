import React from 'react'
import Paper from '@material-ui/core/Paper'
//import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import './styleTreatment.css';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root:{
    marginTop:"10px",
    marginLeft:"15%"
  },
  title: {
  fontSize:"18px",
    color:"#3f3f3f",
  },
  textField:{
  width:"80%"
  },
 
 
}));

export default function  TableTreatment  ()  {
  const classes = useStyles();
return(
  <div className="container"> 
<Paper elevation={1}>
<div className="text-header-treat martop-10">บันทึกการรักษา</div>
<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

<FormGroup className={classes.root}>
<FormLabel className={classes.title}>หมายเลขโค</FormLabel>
<TextField id="input1" variant="outlined"  placeholder="กรอกหมายเลขโค" size="small" className={classes.textField} />
</FormGroup>

</Paper>
  </div>
)
}
