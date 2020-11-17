import React from "react";
import { Paper, Select, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Bigcoral from "./ฺBigcorral";
import Corral from "./Corral";
import Herd from "./Herd";
import Color from "./Color";
import Breed from "./Breed";
const useStyles = makeStyles({
  HeaderTable: {
    height: "49px",
    color: "#fff",
    backgroundColor: "#251CA6",
    fontSize: "24px",
    paddingTop: "5px",
    paddingLeft: "10px",
  },
  sizeTable: {
    width: "70%",
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
    localStorage.setItem("selectSettingFarm", e.target.value);
  };
  React.useEffect(() => {
    setseletedSetting(props.storage);
  }, [props]);
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <Paper variant="outlined">
        <Paper variant="outlined" square className={classes.HeaderTable}>
          ตั้งค่าฟาร์ม
        </Paper>
        <Paper
          elevation={0}
          style={{ padding: "20px", textAlign: "center" }}
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
              <option value="">เลือกการตั้งค่า</option>
              <option>ตั้งค่าโรงเรือน</option>
              <option>ตั้งค่าคอก</option>
              <option>ตั้งค่าฝูง</option>
              <option>ตั้งค่าสีโค</option>
              <option>ตั้งค่าสายพันธุ์</option>
            </Select>
          </FormControl>{" "}
        </Paper>
      </Paper>
      {seletedSetting === "ตั้งค่าโรงเรือน" ? (
        <Bigcoral
          keys={props.posts.Bigcorralkey}
          data={props.posts.Bigcorraldata}
          UID={props.posts.UID}
          loading={props.posts.loading}
        />
      ) : seletedSetting === "ตั้งค่าคอก" ? (
        <Corral 
        keys={props.posts.corralkey}
        data={props.posts.corraldata}
        UID={props.posts.UID}
        loading={props.posts.loading}
        />
      ) : seletedSetting === "ตั้งค่าฝูง" ? (
        <Herd 
        keys={props.posts.herdkey}
        data={props.posts.herddata}
        UID={props.posts.UID}
        loading={props.posts.loading}
        />
      ) : seletedSetting === "ตั้งค่าสีโค" ? (
        <Color 
        keys={props.posts.colorkey}
        data={props.posts.colordata}
        UID={props.posts.UID}
        loading={props.posts.loading}
        />
      ) : seletedSetting === "ตั้งค่าสายพันธุ์" ? (
        <Breed
        keys={props.posts.striankey}
        data={props.posts.striandata}
        UID={props.posts.UID}
        loading={props.posts.loading}
        />
      ) : (
        ""
      )}
    </div>
  );
}
