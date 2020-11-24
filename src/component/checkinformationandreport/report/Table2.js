import React from "react";
import { Paper, Select, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Maintain from "./Maintain";
import Sync from './Sync'
import Breed from './Breed'
import Check from './Check'
import Clave from './Clave'
const useStyles = makeStyles({
  HeaderTable: {
    height: "40px",
    color: "#fff",
    backgroundColor: "#251CA6",
    fontSize: "20px",
    paddingTop: "2px",
    paddingLeft: "10px",
  },
  tableRightBorder: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderStyle: "solid",
  },
  tableRightBorderBody: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    borderStyle: "solid",
  },
});
export default function PaperDrug2(props) {
  const classes = useStyles();
  const [seletedSetting, setseletedSetting] = React.useState("");
  const setData = (e) => {
    setseletedSetting(e.target.value);
    localStorage.setItem("selectSettingReport", e.target.value);
  };
  React.useEffect(() => {
    setseletedSetting(props.storage);
  }, [props]);
  return (
    <div
      className="container-fluid"
      style={{ marginTop: "10px", width: "80%" }}
    >
      <Paper variant="outlined">
        <Paper variant="outlined" square className={classes.HeaderTable}>
          ออกรายงาน
        </Paper>
        <Paper
          elevation={0}
          style={{ padding: "10px", textAlign: "center" }}
          square
        >
          <FormControl size="small" style={{ width: "80%" }}>
            <Select
              id="typeuse"
              variant="outlined"
              native
              onChange={(e) => setData(e)}
              value={seletedSetting}
              style={{ fontSize: "18px" }}
            >
              <option value="">เลือกการออกรายงาน</option>
              <option>ออกรายงานการบำรุง</option>
              <option>ออกรายงานการเหนี่ยวนำ</option>
              <option>ออกรายงานการผสม</option>
              <option>ออกรายงานการตรวจท้อง</option>
              <option>ออกรายงานคลอด</option>
              <option>ออกรายงานโคแท้ง</option>
              <option>ออกรายงานการักษา</option>
            </Select>
          </FormControl>{" "}
        </Paper>
      </Paper>
      <Paper
        variant="outlined"
        square
        style={{
          backgroundColor: "#DCDCDC",
          marginTop: "5px",
          padding: "10px",
        }}
      >
        {seletedSetting === "ออกรายงานการบำรุง" ? (
          <Maintain
            keyData={props.posts.keycattle}
            data={props.posts.datacattle}
            UID={props.posts.UID}
            owner={props.posts.owner}
          />
        ) : seletedSetting === "ออกรายงานการเหนี่ยวนำ" ? (
          <Sync
            keyData={props.posts.keycattle}
            data={props.posts.datacattle}
            UID={props.posts.UID}
            owner={props.posts.owner}
          />
        ) : seletedSetting === "ออกรายงานการผสม" ? (
          <Breed
            keyData={props.posts.keycattle}
            data={props.posts.datacattle}
            UID={props.posts.UID}
            owner={props.posts.owner}
          />
        ) : seletedSetting === "ออกรายงานการตรวจท้อง" ? (
          <Check 
            keyData={props.posts.keycattle}
            data={props.posts.datacattle}
            UID={props.posts.UID}
            owner={props.posts.owner}
          />
        ) : seletedSetting === "ออกรายงานคลอด" ? (
          <Clave
          keyData={props.posts.keycattle}
          data={props.posts.datacattle}
          UID={props.posts.UID}
          owner={props.posts.owner}
          />
        ) : seletedSetting === "ออกรายงานโคแท้ง" ? (
          "abordtion"
        ) : seletedSetting === "ออกรายงานการักษา" ? (
          "treatmain"
        ) : (
          ""
        )}
      </Paper>
    </div>
  );
}
