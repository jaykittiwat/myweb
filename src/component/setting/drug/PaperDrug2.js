import React from "react";
import { Paper, Select, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drug from "./Drug";
import Promaintain from "./Promaintain";
import Prosync from "./Prosync";

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
  React.useEffect(() => {
    setseletedSetting(props.storage);
  }, [props]);
  const setData = (e) => {
    setseletedSetting(e.target.value);
    localStorage.setItem("selectSetting", e.target.value);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Paper
        variant="outlined"
        className={classes.sizeTable}
        style={{ backgroundColor: "#F8F8F8", marginLeft: "15%" }}
      >
        <Paper variant="outlined" square className={classes.HeaderTable}>
          ตั้งค่าโปรแกรมยาฟาร์ม
        </Paper>
        <Paper
          elevation={0}
          style={{ padding: "20px", textAlign: "center" }}
          square
        >
          <FormControl size="small" style={{ width: "80%" }}>
            <Select
            style={{fontSize:"18px"}}
              id="typeuse"
              variant="outlined"
              native
              onChange={(e) => setData(e)}
              value={seletedSetting}
            >
              <option value="">เลือกการตั้งค่า</option>
              <option>นำยาเข้าสู่ระบบ</option>
              <option>ตั้งค่าการบำรุง</option>
              <option>ตั้งค่าการเหนี่ยวนำ</option>
            </Select>
          </FormControl>{" "}
        </Paper>
      </Paper>
      {seletedSetting === "นำยาเข้าสู่ระบบ" ? (
        <Drug
          data={props.posts.drugdata}
          keydrug={props.posts.drugkey}
          UID={props.posts.UID}
          loading={props.posts.loading}
        />
      ) : seletedSetting === "ตั้งค่าการบำรุง" ? (
        <Promaintain
          data={props.posts.pro_maintaindata}
          keydrug={props.posts.pro_maintainkey}
          UID={props.posts.UID}
          loading={props.posts.loading}
        />
      ) : seletedSetting === "ตั้งค่าการเหนี่ยวนำ" ? (
        <Prosync
          data={props.posts.pro_syncdata}
          keydrug={props.posts.pro_synckey}
          UID={props.posts.UID}
          loading={props.posts.loading}
        />
      ) : (
        ""
      )}
    </div>
  );
}
