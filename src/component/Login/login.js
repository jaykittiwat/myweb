import React, { Component } from "react";
import "../styleWebpage.css";
import { Form, Button } from "react-bootstrap";
import Header from "../../Header";
import firebase from "./../../backEnd/firebase/index";
import Home from "./../Home/homepage";
import LinearProgress from "@material-ui/core/LinearProgress";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
      currentUser: null
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  handleSignIn = e => {
    e.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {})
      .catch(error => {
        this.setState({
          ...this.state,
          message: error.message
        });
        alert("ไอดี หรือ  รหัสผ่าน ของท่านไม่ถูกต้อง");
      });
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          ...this.state,
          login: "login",
          currentUser: user
        });
      } else {
        this.setState({
          ...this.state,
          login: "noLogin",
          currentUser: user
        });
      }
    });
  }

  showpageLogin = () => {
    return (
      <>
        {" "}
        <Header />
        <div className="row">
          <div className="image-bg">
            <div className="container-fluid">
              <div className="row r-martop">
                <Form
                  className="container-fluid form-padding bg-box-log-color"
                  onSubmit={this.handleSignIn}
                >
                  <div className="title1">เข้าสู่ระบบ</div>
                  <Form.Group
                    controlId="formBasicEmail"
                    className="form-padding-top"
                  >
                    <Form.Label>ไอดีผู้ใช้</Form.Label>
                    <Form.Control
                      required
                      name="email"
                      type="text"
                      placeholder="Enter email"
                      onChange={this.onChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>รหัสผ่าน</Form.Label>
                    <Form.Control
                      required
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.onChange}
                    />
                  </Form.Group>
                  <div className="row">
                    <Form.Group controlId="formBasicCheckbox" className="col-6">
                      <Form.Check type="checkbox" label="จำรหัสผ่าน" />
                    </Form.Group>
                    <div className="col-6 text-right">
                      <a href="#restpassword">ลืมรหัสผ่าน</a>
                    </div>
                  </div>
                  <Button
                    className="container-fluid bt "
                    aria-disabled="true"
                    type="submit"
                  >
                    เข้าสู่ระบบ
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-style2 row ">
          <div className="row footer-padding container-fluid">
            <div className="col-md-3">
              <li>ผู้พัฒนา</li>
              <ul>
                <li>นายกิตติวัฒน์ ศรีชัยพล</li>
                <li>นายไชยวัฒน์ อธิกรม</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li>ที่ปรึกษา</li>
              <ul>
                <li>ดร.ภูวิศสรณ์ ภูมิสรณคมณ์</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li>ติดต่อได้ที่</li>
              <ul>
                <li>0928412006</li>
                <li>jaykittiwat2542@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li>หมายเหตุ</li>
              <ul>
                <li>version 0.1(Beta)</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  render() {
    if (this.state.login === "login") {
      return <Home currentUser={this.state.currentUser} />;
    }
    if (this.state.login === "noLogin") {
      return <div className="container-fluid ">{this.showpageLogin()}</div>;
    }
    //if user haven't id and password  return -->
    return (
      <div className="container-fluid ">
        <LinearProgress />
      </div>
    );
  }
}
export default Login;

//กดปุ่ม ---->link to component (ส่งprop ไปตาม link) อีกทีหนึ่ง น่าจะแก้ได้
