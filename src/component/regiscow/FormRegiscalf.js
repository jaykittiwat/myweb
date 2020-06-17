import React, { Component } from "react";
import firebase from "./../../backEnd/firebase";
import { Form, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";

//ลงทะเบียนโค เข้้าฟาร์ม
class FormRegiscalf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: "",
      currentUser: "",
      data: {
        birth_id: "",
        birth_weight: "",
        branding: false,
        breed: "",
        color: "",
        dam_id: "",
        horndetering: "",
        name_cattle: "",
        sex: "",
        sire_id: "",
        wean: false,
      },
      selectedFile: null,
      imagePreviewUrl:
        "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
    };
  }

  async componentDidMount() {
    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          currentUser: user.email
        });
      }
    });
  }

  saveData(e) {
    const { name, value } = e.target;

    this.setState(prestate => ({
      currentUser: prestate.currentUser,

      data: {
        ...prestate.data,
        [name]: value
      }
    }));
  }
  //กดปุ่มเซฟข้อมูลลงดาต้าเบส
  saveDataCowTodatabase() {
    const x = Object.values(this.state.data).includes("");

    if (x !== true) {
      //set time of process_dare:""
      let date = new Date();
      let dd = date.getDay();
      let mm = date.getMonth() + 1;
      let yyyy = date.getFullYear();
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (dd < 10) {
        dd = "0" + dd;
      }
      let today = yyyy + "-" + mm + "-" + dd;
      //ร้องขอมูลuser
      axios
        .get("http://localhost:4000/user/logIn/" + this.state.currentUser)
        .then(res => {
          this.setState(prevstate => ({
            //get data user json form firebase

            UID: res.data[0].user,
            currentUser: prevstate.currentUser,
            data: {
              ...prevstate.data,
              owner: res.data[0].fname + " " + res.data[0].lname,
              process_date: today
            },
            selectedFile: prevstate.selectedFile,
            imagePreviewUrl: prevstate.imagePreviewUrl
          }));
          return res;
        })
        .then(res => {
          const sentData = this.state.data;

          firebase
            .storage()
            .ref("Photo/" + this.state.UID + "/pedigree/")
            .child(this.state.data.dam_id)
            .put(this.state.selectedFile)
            .then(res => {
              //Photo/ชื่อid/ชื่อไฟร์
            });
          axios
            .post(
              "http://localhost:4000/user/cow/registor/" + res.data[0].user,
              sentData
            )
            .then(res => {
              alert("ลงทะเบียนโคสำเร็จ");
            })
            .catch(err => {
              alert("เกิดข้อผิดพลาดกับระบบ");
            });
        });
    } else {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
  }
  //เมื่อรูปเข้ามา
  fileChangedHandler = event => {
    const nameImge = event.target.files[0];
    this.setState(prestate => ({
      UID: prestate.UID,
      currentUser: prestate.currentUser,
      data: { ...prestate.data },
      selectedFile: nameImge,
      imagePreviewUrl: prestate.imagePreviewUrl
    }));

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState(prestate => ({
        UID: prestate.UID,
        currentUser: prestate.currentUser,
        data: { ...prestate.data },
        selectedFile: prestate.selectedFile,
        imagePreviewUrl: reader.result
      }));
    };

    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    let $imagePreview = (
      <div className="previewText image-container">
        Please select an Image for Preview
      </div>
    );
    if (this.state.imagePreviewUrl) {
      $imagePreview = (
        <div
          className="image-container text-center"
          style={{
            marginLeft: "22%",
            border: " 1px solid #ddd",
            borderRadius: "4px",
            width: "300px",
            height: "300px",
            paddingTop: "1%"
          }}
        >
          <img
            src={this.state.imagePreviewUrl}
            alt="icon"
            width="98%"
            height="98%"
          />{" "}
        </div>
      );
    }

    return (
      <div>
        <div style={{ paddingTop: "40px" }}>
          <Form>
            <Form.Row>
              <div className="container-fluid">
                <div style={{ fontSize: "25px", textAlign: "center" }}>
                  ลงทะเบียนพันธุ์ประวัติโค
                </div>
              </div>
            </Form.Row>
            <Form.Row>
              <Col md={{ span: 4, offset: 1 }}>
                <Form.Group>
                  <Form.Label>ชื่อโค</Form.Label>
                  <Form.Control
                    name="name_cattle"
                    type="text"
                    placeholder="กรุณากรอกชื่อโค"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>
                    หมายเลขประจำตัวสัตว์ (์NID/RFID/Microchip/เบอร์หู)
                  </Form.Label>
                  <Form.Control
                    name="birth_id"
                    type="text"
                    placeholder="กรุณากรอกหมายเลขประจำตัวสัตว์"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>เพศ</Form.Label>
                  <Form.Control
                    as="select"
                    name="sex"
                    onChange={event => this.saveData(event)}
                  >
                    <option value="">เลือก</option>
                    <option value="MISS">เพศเมีย</option>
                    <option value="BULL">เพศผู้</option>
                  </Form.Control>
                </Form.Group>
            

                <Form.Group>
                  <Form.Label>สายพันธุ์โค</Form.Label>
                  <Form.Control
                    onChange={event => this.saveData(event)}
                    name="breed"
                    type="text"
                    placeholder="กรุณากรอกสายพันธุ์"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>แม่พันธุ์</Form.Label>
                  <Form.Control
                    name="dam_id"
                    type="text"
                    placeholder="กรุณากรอกแม่พันธุ์"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>
                <Form.Group controlId="sire_id">
                  <Form.Label>พ่อพันธุ์</Form.Label>
                  <Form.Control
                    name="sire_id"
                    type="text"
                    placeholder="กรุณากรอกพ่อพันธุ์"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>
                <Form.Group controlId="color">
                  <Form.Label>สี</Form.Label>
                  <Form.Control
                    as="select"
                    name="color"
                    onChange={event => this.saveData(event)}
                  >
                    <option value="ไม่ระบุ">เลือก </option>
                    <option>ขาว</option>
                    <option>ดำ</option>
                    <option>น้ำตาล</option>
                    <option>แดง</option>
                  </Form.Control>
                </Form.Group>



                <Form.Group controlId="formwight">
                  <Form.Label>น้ำหนักตอนเกิด (กก.)</Form.Label>
                  <Form.Control
                    name="birth_weight"
                    type="text"
                    placeholder="กรุณากรอกน้ำหนักตอนเกิด (กก.)"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>

              </Col>

              <Col md={{ span: 4, offset: 1 }} className="text-center ">
                <div>
                  <div className="container-fluid boxImgFrom  ">
                    {$imagePreview}
                    <hr />
                    <input
                      type="file"
                      name="avatar"
                      onChange={event => this.fileChangedHandler(event)}
                    />
                  </div>
                </div>
              </Col>
            </Form.Row>
            <hr />
            <div className="row">
              <div className="text-center container-fluid">
                <Form.Group>
                  <Button
                    variant="contained"
                    color="primary"
                    className="button-w2"
                    style={{ outline: "none" }}
                    onClick={() => this.saveDataCowTodatabase()}
                  >
                    ตกลง
                  </Button>{" "}
                  <Link to="/login">
                    <Button
                      variant="contained"
                      color="secondary"
                      className="button-w2"
                      style={{ outline: "none" }}
                    >
                      ยกเลิก
                    </Button>
                  </Link>
                </Form.Group>
              </div>
            </div>
          </Form>
        </div>
        );
      </div>
    );
  }
}
export default FormRegiscalf;
