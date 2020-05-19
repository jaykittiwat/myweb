import React, { Component } from "react";

import { Form, Col, Button } from "react-bootstrap";
import FormImg from "../Login/FormImg";
import { Link } from "react-router-dom";

//ลงทะเบียนโค เข้้าฟาร์ม
class FormRegiscow extends Component {
  render() {
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
                  <Form.Label>ประเภทโค</Form.Label>
                  <Form.Control as="select">
                    <option>แม่พันธุ์โค</option>
                    <option>พ่อพันธุ์โค</option>
                    <option>ลูกโค</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formpedi">
                  <Form.Label>สายพันธุ์โค</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกสายพันธุ์"
                  />
                </Form.Group>

                <Form.Group controlId="formbday">
                  <Form.Label>วัน/เดือน/ปีเกิด</Form.Label>
                  <Form.Control required type="date" />
                </Form.Group>

                <Form.Group controlId="age">
                  <Form.Label>อายุ (ปี)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกอายุ (ปี)"
                  />
                </Form.Group>

                <Form.Group controlId="formgender">
                  <Form.Label>เพศ</Form.Label>
                  <Form.Control as="select">
                    <option>เพศผู้</option>
                    <option>เพศเมีย</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formwight">
                  <Form.Label>น้ำหนักปัจจุบัน (กก.)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกน้ำหนักปัจจุบัน (กก.)"
                  />
                </Form.Group>

                <Form.Group controlId="formheight">
                  <Form.Label>ความสูง (ซม.)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกความสูง (ซม.)"
                  />
                </Form.Group>

                <Form.Group controlId="formchest">
                  <Form.Label>ขนาดรอบอก (ซม.)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกขนาดรอบอก (ซม.)"
                  />
                </Form.Group>

                <Form.Group controlId="formbodylength">
                  <Form.Label>ความยาวลำตัว (ซม.)</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกความยาวลำตัว (ซม.)"
                  />
                </Form.Group>

                <Form.Group controlId="formhouse">
                  <Form.Label>โรงเรือน</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกโรงเรือน"
                  />
                </Form.Group>

                <Form.Group controlId="formstall">
                  <Form.Label>คอกโค</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="กรุณากรอกคอกโค"
                  />
                </Form.Group>

                <Form.Group controlId="formmasses">
                  <Form.Label>ฝูงโค</Form.Label>
                  <Form.Control
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
                  <Button type="submit" className="button-w2">
                    ตกลง
                  </Button>

                  <Link to="/login">
                    <Button variant="danger" className="button-w2">
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
