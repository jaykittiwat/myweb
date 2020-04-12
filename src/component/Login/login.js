import React,{Component} from 'react';
import "../styleWebpage.css";
import {Form} from 'react-bootstrap'; 
import {Button} from 'react-bootstrap'; 
import {Link} from 'react-router-dom';

class Login extends Component{
  render(){
      return(
          <div className="container-fluid ">
                 <div className="row">
                    <div className="col-md-5"> 
                            <div className="row container-fluid r2-c1 ">เว็บแอปพลิเคชันระบบการจัดการแม่พันธุ์โค</div> 
                            <div className="row  container-fluid r2-c1-t2">Webapplication Dam Management System</div>
                    </div> 
                    <div className="col-md-5"></div> 
                    <div className="col-md-1 r2-c2">ลงทะเบียน</div>
                    <div className="col-md-1 r2-c2 ">เข้าสู่ระบบ</div>
                </div>


                <div className="row">
              <div className="image-bg"> 
                    <div className="bg-box-log-color">
                    <Form  className="form-padding ">
                    <div className="title1">เข้าสู่ระบบ</div>
                    <Form.Group controlId="formBasicEmail" className="form-padding-top">
                      <Form.Label>ไอดีผู้ใช้</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" /> 
                    </Form.Group>
                  
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>รหัสผ่าน</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="จำรหัสผ่าน" />
                    </Form.Group>
                    <Link to=" "><Button className="container-fluid bt " aria-disabled="true" >
                    เข้าสู่ระบบ
                    </Button></Link>
                  </Form>
                  </div>
                    
              </div>
                </div>
              
                <div className="footer-style2 row ">
                  <div className="row footer-padding container-fluid">
                  <div className="col-md-4"><h3>ผู้พัฒนา</h3><ul><li>นายกิตติวัฒน์ ศรีชัยพล</li><li>นายไชยวัฒน์  อธิกรม</li></ul></div> 
                  <div className="col-md-4"><h3>ที่ปรึกษา</h3><ul><li>ดร.ภูวิศสรณ์ ภูมิสรณคมณ์</li></ul></div> 
                  <div className="col-md-4"><h3>ติดต่อได้ที่</h3><ul><li>0928412006</li></ul></div>
                  </div>
                </div>
                     
                         
                     
              
            </div>
      
      )
  }
}
export default Login;

