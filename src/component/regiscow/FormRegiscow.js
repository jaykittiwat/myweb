import React, { Component } from "react";
import firebase from "./../../backEnd/firebase";
import { Form, Col } from "react-bootstrap";
import FormImg from "../Login/FormImg";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from "axios";
//ลงทะเบียนโค เข้้าฟาร์ม
class FormRegiscow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      data: {
        birth_chest_head_ratio: "",//รอบอกเกิด*
        birth_date: "",//วันเกิด*
        birth_weight: "",//น้ำหนักเกิด*
        breed: "",//พันธุ์*
        breed_method: "",//วิธีผสม*
        breeder: "",//เจ้าของ
        cattle_id: "",//เลขโค*
        color: "",//สี
        corral: "",//คอก
        dam_id: "",//id แม่
        herd_no: "",//ฝูง
        number_of_breeding: null,//จำนวนการผสมพันธุ์
        owner: "",//เจ้าของ
        process_date: null,
        sex: "",//เพศ//BULLผู้/MISSเมีย*
        sire_id: "",//id พ่อ
        status: "",//สถานะ
        waen_weight: "",//น้ำหนักล่าสุดsหลังอย่านม*
        wean_chest_head_ratio: "",//รอบออกล่าสุดหลังอย่านม
        wean_date: "",//วันอย่านม
        year_hip_hight: "",//ความสูงสะโพก1ปี
        year_weight: "",//น้ำหนักอายุ1ปี
      }
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

  saveData(event) {}

  render() {
    console.log(this.state.currentUser);
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
                <Form.Group controlId="formcowname">
                  <Form.Label>ชื่อโค</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกชื่อโค"
                  
                  />
                </Form.Group>

                <Form.Group controlId="formtracknum">
                  <Form.Label>
                    หมายเลขประจำตัวสัตว์ (์NID/RFID/Microchip/เบอร์หู)
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกหมายเลขประจำตัวสัตว์"
                   
                  />
                </Form.Group>

                <Form.Group controlId="formcowtype">
                  <Form.Label>เพศ</Form.Label>
                  <Form.Control as="select" >
                    <option value="MISS">เพศเมีย</option>
                    <option value="BULL">เพศผู้</option>
               
                  </Form.Control> 
                </Form.Group>
                <Form.Group controlId="formcowtype">
                  <Form.Label>วิธีผสม</Form.Label>
                  <Form.Control as="select"
                   onChange={event =>console.log(event.target.value)}>
                    <option value="ไม่ระบุ">เลือก </option>
                    <option value="AI">น้ำเชื้อ</option>
                    <option value="NT">พ่อพันธุ์</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formpedi">
                  <Form.Label>สายพันธุ์โค</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกสายพันธุ์"
                    onChange=""
                  />
                </Form.Group>
                <Form.Group controlId="color">
                  <Form.Label>สี</Form.Label>
                  <Form.Control as="select"
                   onChange={event =>console.log(event.target.value)}>
                    <option value="ไม่ระบุ">เลือก </option>
                    <option >ขาว</option>
                    <option >ดำ</option>
                    <option >น้ำตาล</option>
                    <option >แดง</option>
                  </Form.Control>
                </Form.Group>


                <Form.Group controlId="formbday">
                  <Form.Label>วัน/เดือน/ปีเกิด</Form.Label>
                  <Form.Control required type="date" onChange="" />
                </Form.Group>

                <Form.Group controlId="age">
                  <Form.Label>อายุ (ปี)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกอายุ (ปี)"
                    onChange=""
                  />
                </Form.Group>

              

                <Form.Group controlId="formwight">
                  <Form.Label>น้ำหนักตอนเกิด (กก.)</Form.Label>
                  <Form.Control
                    onChange=""
                    required
                    type="text"
                    placeholder="กรุณากรอกน้ำหนักตอนเกิด (กก.)"
                  />
                </Form.Group>

                <Form.Group controlId="formheight">
                  <Form.Label>ความสูง (ซม.)</Form.Label>
                  <Form.Control
                    onChange=""
                    required
                    type="text"
                    placeholder="กรุณากรอกความสูง (ซม.)"
                  />
                </Form.Group>
                <Form.Group controlId="formchest">
                  <Form.Label>ขนาดรอบอกตอนเกิด (ซม.)</Form.Label>
                  <Form.Control
                    onChange=""
                    required
                    type="text"
                    placeholder="กรุณากรอกขนาดรอบอกตอนเกิด (ซม.)"
                  />
                </Form.Group>
                <Form.Group controlId="formchest">
                  <Form.Label>ขนาดรอบอกหลังอย่านม (ซม.)</Form.Label>
                  <Form.Control
                    onChange=""
                    required
                    type="text"
                    placeholder="กรุณากรอกขนาดรอบอกหลังอย่านม (ซม.)"
                  />
                </Form.Group>

                <Form.Group controlId="formbodylength">
                  <Form.Label>ความยาวลำตัว (ซม.)</Form.Label>
                  <Form.Control
                    onChange=""
                    required
                    type="text"
                    placeholder="กรุณากรอกความยาวลำตัว (ซม.)"
                  />
                </Form.Group>

                <Form.Group controlId="formhouse">
                  <Form.Label>โรงเรือน</Form.Label>
                  <Form.Control
                    onChange=""
                    required
                    type="text"
                    placeholder="กรุณากรอกโรงเรือน"
                  />
                </Form.Group>

                <Form.Group controlId="formstall">
                  <Form.Label>คอกโค</Form.Label>
                  <Form.Control
                    onChange=""
                    required
                    type="text"
                    placeholder="กรุณากรอกคอกโค"
                  />
                </Form.Group>

                <Form.Group controlId="formmasses">
                  <Form.Label>ฝูงโค</Form.Label>
                  <Form.Control
                    onChange=""
                    required
                    type="text"
                    placeholder="กรุณากรอกฝูงโค"
                  />
                </Form.Group>
              </Col>

              <Col md={{ span: 4, offset: 1 }} className="text-center ">
                <div>
                  <FormImg />
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
export default FormRegiscow;
/*<Form.Group controlId="formgender">
<Form.Label>เพศ</Form.Label>
<Form.Control as="select" onChange="">
  <option>เพศผู้</option>
  <option>เพศเมีย</option>
</Form.Control>
</Form.Group>*/