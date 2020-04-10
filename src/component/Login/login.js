import React,{Component} from 'react';
import "../styleWebpage.css";
import {Form} from 'react-bootstrap'; 
import {Button} from 'react-bootstrap'; 

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
              <Form  className="form-padding">
              <Form.Group controlId="formBasicEmail">
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
              <Button variant="primary">
               เข้าสู่ระบบ
              </Button>
            </Form>
            </div>
              
              </div>
                </div>
                     
                     
                         
                     
              
            </div>
      
      )
  }
}
export default Login;

/***/