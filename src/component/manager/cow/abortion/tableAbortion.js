import React from "react";
import Paper from "@material-ui/core/Paper";
import "./styleAbor.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%"
  }
}));

export default function TableAbortion() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {" "}
      <Paper elevation={3}>
        <div className="text-header">บันทึกโคแท้ง</div>
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined1"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined2"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined3"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined4"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined5"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined6"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <div className="row">
          <div className="pad-l-20">กรอกข้อมูลการแท้ง</div>
          <div className="col">
            <hr />
          </div>
        </div>
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined1"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined2"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined3"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined4"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <div className="row">
          <div className="pad-l-20">กรอกข้อมูลการรักษา</div>
          <div className="col">
            <hr />
          </div>
        </div>
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined1"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              className="textField-width"
              id="outlined2"
              label="Outlined"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={3} className="pad-10">
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <Paper elevation={1}>1</Paper>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button
              style={{ outline: "none" }}
              variant="contained"
              color="primary"
              className="textField-width "
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Paper>
    </div>
  );
}
