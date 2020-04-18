import React,{Component} from 'react';
import "../styleWebpage.css";
import {Form,Button} from 'react-bootstrap'; 
import {Link} from 'react-router-dom';
import Header from '../../Header';
class Login extends Component{
  render(){
      return(
          <div className="container-fluid ">
               

               <Header/>


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
                    <Link to=""><Button className="container-fluid bt " aria-disabled="true" >
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

