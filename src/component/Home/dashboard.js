import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { ListTeam } from "./listteam";
import { CardFarm } from "./farmprofile";
import { ListCorral } from "./listCoral";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));

const intailState = {
  bigcoral: false,
  nomalcoral: false,
  smallcoral: false,
  type: false,
  color: false,
  drug: false,
  vaccine: false,
  program_sync: false,
  program_maintain: false
};
export default function DashBoard() {
  const classes = useStyles();
  const [settingStatus, setsettingStatus] = React.useState(intailState);
  return (
    <div className="container-fluid" style={{ backgroundColor: "#f4f4f4" }}>
      <Grid
        container
        spacing={3}
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Grid item xs={12} sm={6}>
          <CardFarm />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            square
            style={{
              color: "#fff",
              width: "100%",
              background: " linear-gradient(180deg, rgba(62,134,255,1) 0%, rgba(0,72,186,1) 100%)",
              minWidth: "400px",
              padding: "12px",
              fontSize: "22px"
            }}
          >
            {" "}
            ตั้งค่าฟาร์มเบื้องต้น
          </Paper>
          <Paper elevation={1} >
            <List className={classes.root} aria-label="mailbox folders">
              <Link to="/farmsetting" style={{ textDecoration: "none" }}>
                <ListItem button divider>
                  <ListItemText primary="จำนวนโรงเรือน" />
                  {settingStatus.bigcoral === false ? (
                    <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
                  ) : (
                    <span style={{ color: "green" }}>เสร็วแล้ว</span>
                  )}
                </ListItem>
              </Link>

              <Link to="/farmsetting" style={{ textDecoration: "none" }}>
                <ListItem button divider>
                  <ListItemText primary="จำนวนคอก" />
                  {settingStatus.nomalcoral === false ? (
                    <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
                  ) : (
                    <span style={{ color: "green" }}>เสร็วแล้ว</span>
                  )}
                </ListItem>
              </Link>

              <Link to="/farmsetting" style={{ textDecoration: "none" }}>
                <ListItem button divider>
                  <ListItemText primary="จำนวนฝูง" />
                  {settingStatus.smallcoral === false ? (
                    <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
                  ) : (
                    <span style={{ color: "green" }}>เสร็วแล้ว</span>
                  )}
                </ListItem>
              </Link>

              <Link to="/farmsetting" style={{ textDecoration: "none" }}>
                <ListItem button divider>
                  <ListItemText primary="สายพันธุ์โคในฟาร์ม" />
                  {settingStatus.type === false ? (
                    <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
                  ) : (
                    <span style={{ color: "green" }}>เสร็วแล้ว</span>
                  )}
                </ListItem>
              </Link>
              <Link to="/farmsetting" style={{ textDecoration: "none" }}>
                <ListItem button divider>
                  <ListItemText primary="สีโค" />
                  {settingStatus.color === false ? (
                    <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
                  ) : (
                    <span style={{ color: "green" }}>เสร็วแล้ว</span>
                  )}
                </ListItem>
              </Link>

              <Link to="/drugsetting" style={{ textDecoration: "none" }}>
                <ListItem button divider>
                  <ListItemText primary="ตั้งค่ายา" />
                  {settingStatus.drug === false ? (
                    <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
                  ) : (
                    <span style={{ color: "green" }}>เสร็วแล้ว</span>
                  )}
                </ListItem>
              </Link>

              <Link to="/drugsetting" style={{ textDecoration: "none" }}>
                <ListItem button divider>
                  <ListItemText primary="ตั้งค่าวัคซีน" />
                  {settingStatus.vaccine === false ? (
                    <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
                  ) : (
                    <span style={{ color: "green" }}>เสร็วแล้ว</span>
                  )}
                </ListItem>
              </Link>

              <Link to="/drugsetting" style={{ textDecoration: "none" }}>
                <ListItem button divider>
                  <ListItemText primary="โปรแกรมการเหนี่ยวนำ" />
                  {settingStatus.program_sync === false ? (
                    <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
                  ) : (
                    <span style={{ color: "green" }}>เสร็วแล้ว</span>
                  )}
                </ListItem>
              </Link>

              <Link to="/drugsetting" style={{ textDecoration: "none" }}>
                <ListItem button>
                  <ListItemText primary="โปรแกรมการบำรุง" />
                  {settingStatus.program_maintain === false ? (
                    <span style={{ color: "red" }}>ยังไม่เสร็จ</span>
                  ) : (
                    <span style={{ color: "green" }}>เสร็วแล้ว</span>
                  )}
                </ListItem>
              </Link>
            </List>
          </Paper>
        </Grid>

        <ListCorral />

        <Grid item xs={12} sm={6}>
          <ListTeam />
        </Grid>
      </Grid>
    </div>
  );
}
