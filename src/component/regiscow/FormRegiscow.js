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
        name_cow: "", //ชื่อ
        birth_chest_head_ratio: "", //รอบอกเกิด*
        birth_date: "", //วันเกิด*
        birth_weight: "", //น้ำหนักเกิด*
        breed: "", //พันธุ์*
        breed_method: "", //วิธีผสม*
        breeder: "", //เจ้าของ---
        cattle_id: "", //เลขโค*
        color: "", //สี*
        bigcorral: "", //โณงเรือน
        corral: "", //คอก*
        dam_id: "", //id แม่*
        herd_no: "", //ฝูง*
        number_of_breeding: "", //จำนวนการผสมพันธุ์*
        owner: "", //เจ้าของ//เซดเอง//ชื่อนามกสุลของUID--
        process_date: null, //น่าจะวันที่บีันทึก--
        sex: "", //เพศ//BULLผู้/MISSเมีย*
        sire_id: "", //id พ่อ*
        status: "", //สถานะ//ระบบเซต--
        waen_weight: "", //น้ำหนักล่าสุดsหลังอย่านม*
        wean_chest_head_ratio: "", //รอบออกล่าสุดหลังอย่านม
        wean_date: "", //วันอย่านม
        year_hip_hight: "", //ความสูงสะโพก1ปี
        year_weight: "" //น้ำหนักอายุ1ปี
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

  saveDataCowTodatabase() {
    
     axios
      .get(
        "http://localhost:4000/user/logIn/" + this.state.currentUser
      )
      .then((res) => {
       
        const sentData = this.state.data;
       
       axios.post("http://localhost:4000/user/cow/registor/" + res.data[0].user,
        sentData
       ).then(res=>{
         alert("ลงทะเบียนโคสำเร็จ");
       }).catch(err=>{
         alert("เกิดข้อผิดพลาดกับระบบ")
       })
      });
  }
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
                <Form.Group>
                  <Form.Label>ชื่อโค</Form.Label>
                  <Form.Control
            
                    name="name_cow"
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
                    name="cattle_id"
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
                  <Form.Label>วิธีผสม</Form.Label>
                  <Form.Control
                    as="select"
                    name="breed_method"
                    onChange={event => this.saveData(event)}
                  >
                    <option value="ไม่ระบุ">เลือก </option>
                    <option value="AI">น้ำเชื้อ</option>
                    <option value="NT">พ่อพันธุ์</option>
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

                <Form.Group controlId="formbday">
                  <Form.Label>วัน/เดือน/ปีเกิด</Form.Label>
                  <Form.Control
                    name="birth_date"
                    type="date"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>

                <Form.Group //ต้องไปดูในแอพอีกที
                >
                  <Form.Label>ชื่อ breeder</Form.Label>
                  <Form.Control
                    name="breeder"
                    type="text"
                    placeholder="กรุณากรอกชื่อโค"
                    onChange={event => this.saveData(event)}
                  />
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
                <Form.Group controlId="formwight">
                  <Form.Label>น้ำหนักอายุ 1ปี (กก.)</Form.Label>
                  <Form.Control
                    name="year_weight"
                    type="text"
                    placeholder="กรุณากรอกน้ำหนักตอนเกิด (กก.)"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>

                <Form.Group controlId="formheight">
                  <Form.Label>ความสูงโพก 1ปี (ซม.)</Form.Label>
                  <Form.Control
                    name="year_hip_hight"
                    type="text"
                    placeholder="กรุณากรอกความสูงสะโพก (ซม.)"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>
                <Form.Group controlId="formchest">
                  <Form.Label>ขนาดรอบอกตอนเกิด (ซม.)</Form.Label>
                  <Form.Control
                    onChange={event => this.saveData(event)}
                    name="birth_chest_head_ratio"
                    type="text"
                    placeholder="กรุณากรอกขนาดรอบอกตอนเกิด (ซม.)"
                  />
                </Form.Group>
                <Form.Group controlId="formchest">
                  <Form.Label>ขนาดรอบอกหลังอย่านม (ซม.)</Form.Label>
                  <Form.Control
                    onChange={event => this.saveData(event)}
                    name=" wean_chest_head_ratio"
                    required
                    type="text"
                    placeholder="กรุณากรอกขนาดรอบอกหลังอย่านม (ซม.)"
                  />
                </Form.Group>

                <Form.Group controlId="formbday">
                  <Form.Label>วัน/เดือน/ปี ที่หย่านม (หากมี)</Form.Label>
                  <Form.Control
                    name="wean_date"
                    type="date"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>

                <Form.Group controlId="formhouse">
                  <Form.Label>โรงเรือน</Form.Label>
                  <Form.Control
                    name="bigcorral"
                    required
                    type="text"
                    placeholder="กรุณากรอกโรงเรือน"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>

                <Form.Group controlId="corral">
                  <Form.Label>คอกโค</Form.Label>
                  <Form.Control
                    name="corral"
                    required
                    type="text"
                    placeholder="กรุณากรอกคอกโค"
                    onChange={event => this.saveData(event)}
                  />
                </Form.Group>

                <Form.Group controlId="formmasses">
                  <Form.Label>ฝูงโค</Form.Label>
                  <Form.Control
                    name="herd_no"
                    type="text"
                    placeholder="กรุณากรอกฝูงโค"
                    onChange={event => this.saveData(event)}
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
export default FormRegiscow;
/*<Form.Group controlId="formgender">
<Form.Label>เพศ</Form.Label>
<Form.Control as="select" onChange="">
  <option>เพศผู้</option>
  <option>เพศเมีย</option>
</Form.Control>
</Form.Group>*/

//จัดการอายุวัว
/*  <Form.Group controlId="age">
                  <Form.Label>อายุ (ปี)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกอายุ (ปี)"
                 
                  />
                </Form.Group> */
