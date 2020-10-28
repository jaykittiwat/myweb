import React from "react";
import {
  Paper,
  TextField,
  Button,
  Grid,
} from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function TableOfmom(props) {
  const top100Films = [{ id_cattle: "1" }, { id_cattle: "2" }];
  const [selectedId, setSelectedId] = React.useState("");
  const setid = (newValue) => {
    setSelectedId(newValue);
  };
  React.useEffect(() => {
console.log(props);
  }, [props]);
  return (
    <Paper square elevation={3} style={{ padding: "20px", margin: "10px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          ค้นหาหมายเลขโค
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            getOptionSelected={(option, value) =>
              option.cattle_id === value.cattle_id
            }
            onChange={(event, newValue) => setid(newValue)}
            options={top100Films.map((option) => option.id_cattle)}
            renderInput={(params) => (
              <TextField
                style={{ width: "100%" }}
                placeholder="กรอกหมายเลขโค"
                {...params}
                size="small"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: "search" }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          {selectedId===""?"กรุณากรอกหมายเลขโค....": <Paper elevation={3} style={{ padding: "10px" }}>
        หมายเลขโค:{selectedId}
            <Button
              variant="contained"
              style={{
                marginLeft:"10%",
                backgroundColor: "red",
                color: "#fff",
                padding: "10px",
                width: "100px",
              }}
            >
              PDF
            </Button>{" "}
            <Button
              variant="contained"
              style={{
                backgroundColor: "green",
                color: "#fff",
                padding: "10px",
                width: "100px",
              }}
            >
              EXCEL
            </Button>
          </Paper>}
         
        </Grid>
      </Grid>
    </Paper>
  );
}
