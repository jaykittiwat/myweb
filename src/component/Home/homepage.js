import React, { Component } from "react";
import { FormGroup, FormLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import HeaderLogin from "./../../HeaderLogin";
import "./styh.css";
import NavbarLogin from "./../../Navbar";
import Footerversion from "./../../footerversion";
//import thor from "../Img/2.jpg";
import axios from "axios";
import { Paper, Grid, Avatar } from "@material-ui/core";
import firebase from "./../../backEnd/firebase";

// หน้า login แล้ว
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      param: this.props,
      imgeUser: ""
    };
  }

  async componentDidMount() {
    await axios
      .get(
        "http://localhost:4000/user/logIn/" + this.state.param.currentUser.email
      )
      .then(res => {
        const getUser = res.data[0];
        this.setState({ ...this.state, user: getUser });
      })
      .then(() => {
        firebase
          .storage()
          .ref(
            "/Photo/" +
              this.state.user.user +
              "/photoUser/" +
              this.state.user.user +
              ".jpg"
          )
          .getDownloadURL()
          .then(url => {
            this.setState({ ...this.state, imgeUser: url });
          }).then(()=>{
            //console.log(this.state.user)
          })
      });
  }

  render() {
    return (
      <div className="container-fluid ">
        <div className="row ">
          <HeaderLogin />
        </div>
        <div className="row Nav-shadow posi">
          <NavbarLogin />
        </div>

        <div className="row " style={{ marginTop: "30px" }}>
          <div className="container">
            <Paper elevation={2}>
              <div className="container-fluid">
                <Grid container spacing={3}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    style={{ backgroundColor: "#f5f5f5" }}
                  >
                    <div style={{ fontSize: "30px" }}>ทดลองฟาร์ม</div>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Avatar
                      src={this.state.imgeUser}
                      alt="UserPhoto"
                      style={{ width: "120px", height: "120px" }}
                    ></Avatar>
                  </Grid>
                  <Grid item xs={12} md={10}>
                    <div style={{ fontSize: "25px", marginTop: "2%" }}>
                      ยินดีต้อนรับ
                    </div>
                    <div style={{ fontSize: "30px", color: "#651fff" }}>
                      {this.state.user.user}
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <div>
                      <hr />
                    </div>
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={6}>
                        <FormGroup>
                          <FormLabel>ชื่อ</FormLabel>
                        </FormGroup>
                        <TextField
                          className="container-fluid"
                          value={this.state.user.fname || ""}
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={6} sm={6}>
                        <FormGroup>
                          <FormLabel>นามสกุล</FormLabel>
                        </FormGroup>
                        <TextField
                          className="container-fluid"
                          value={this.state.user.lname || ""}
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormGroup>
                          <FormLabel>Email</FormLabel>
                        </FormGroup>
                        <TextField
                          className="container-fluid"
                          value={this.state.user.email || ""}
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormGroup>
                          <FormLabel>ตำแหน่ง</FormLabel>
                        </FormGroup>
                        <TextField
                          className="container-fluid"
                          value={this.state.user.privilege || ""}
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormGroup>
                          <FormLabel>ที่อยู่</FormLabel>
                        </FormGroup>
                        <TextField
                          className="container-fluid"
                          value={this.state.user.address || ""}
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
                        <FormGroup>
                          <FormLabel>เบอร์โทร</FormLabel>
                        </FormGroup>
                        <TextField
                          className="container-fluid"
                          value={this.state.user.phone_num || ""}
                          variant="outlined"
                          size="small"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </div>
        </div>
        
<Footerversion/>
        
      </div>
    );
  }
}
export default Home;
