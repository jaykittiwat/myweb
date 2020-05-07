import React,{useState} from 'react';
import {Form,Col, Button} from 'react-bootstrap';
//import { Button } from "react-bootstrap";
import FormImg from './FormImg';
import {Link} from 'react-router-dom';




////////////////////////หน้าสำหรับกรอกข้อมูลการสมัคร/////////////////////
export default function FormData() {
  const intailState={
      username:"",
      password:"",
      rePassword:"",
      email:"",
      name:"",
      lastName:"",
      cardId:"",
      address:"",
      country:"",
      district:"",
      district2:""
     
      }
  const [account, setAccount] = useState(intailState);

 

  const handleSubmit=(event)=>{


    console.log(event.target.className);
    
    if(account.username.length<6){
      alert(" ไอดีไม่ถูกต้อง");
      event.preventDefault(); //หยุดการroute  หรือ หยุดค่าDefalt ของelement นั้น
    }
    //เชค password ตามเงื่อไข
    if(account.password!==account.rePassword||account.password<6){
      alert("กรูณากรอก password ให้ตรงกัน");
      event.preventDefault();
    }
    //เชคอักษรEmail
    ValidateEmail(event);

    if(account.name===""||account.lastName===""){
      alert("กรูณากรอกชื่อ และ นามสกุล");
      event.preventDefault();
    }
    if(account.cardId.length!==13){
    
    alert("เลขบัตรประชาชนไม่ถูกต้อง");
      event.preventDefault();
    }

    }


  const ValidateEmail=(event)=> 
{
 if (/^\w+([s.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(account.email))
  {
    return (true)
  }
    alert("Email ไม่ถูกต้อง");
    event.preventDefault();
}

  
 

    return (
      <div>
           
           <Form >
           <Form.Row >
             <Col ><Form.Group controlId="formUserId" >
                <Form.Label>ไอดี</Form.Label>
                <Form.Control 
                   required
                type="text" 
                placeholder="กรอกไอดี 6 ตัว ขึ้นไป"
                value={account.username}
                onChange={e=>{
                  setAccount({...account,username:e.target.value});

                }
              } />
               
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control 
                 required
                type="password" 
                placeholder="กรอกรหัสผ่าน 6 หลัก ขึ้นไป"
                value={account.password}
                onChange={e=>{setAccount({...account,password:e.target.value});}
              } />
              </Form.Group>

              <Form.Group controlId="formBasicRePassword">
                <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                <Form.Control 
                  required
                type="password" 
                placeholder="กรอกรหัสผ่านอีกครัง"
                value={account.rePassword}
                onChange={e=>{setAccount({...account,rePassword:e.target.value});}
              } />
              </Form.Group>

              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                required
                type="email" 
                placeholder="กรอก Email"
                value={account.email}
                onChange={e=>{setAccount({...account,email:e.target.value});}
              } />
              </Form.Group>

              <Form.Group controlId="validationCustom01">
                <Form.Label>ชื่อ</Form.Label>
                <Form.Control 
                required
                type="text" 
                placeholder="กรอกชื่อ"
                value={account.name}
                onChange={e=>{setAccount({...account,name:e.target.value});}
              } />
              </Form.Group>
   
              <Form.Group controlId="validationCustom02">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control 
                required
                type="text" 
                placeholder="กรอกนามสกุล"
                value={account.lastName}
                onChange={e=>{setAccount({...account,lastName:e.target.value});}
              } />
              </Form.Group>
              <Form.Group controlId="validationCustom03">
                <Form.Label>เลขบัตรประชาชน</Form.Label>
                <Form.Control 
                required
                type="text" 
                placeholder="เลขบัตร 13 หลัก"
                value={account.lastName}
                onChange={e=>{setAccount({...account,cardId:e.target.value});}
              } />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>ที่อยู่</Form.Label>
                <Form.Control 
                required
                type="text" 
                placeholder="บ้านเลขที่ หมู่"
                value={account.address}
                onChange={e=>{setAccount({...account,address:e.target.value});}
              } 
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea2">
                <Form.Label>จังหวัด</Form.Label>
                <Form.Control 
                required
                type="text" 
                placeholder="จังหวัด"
                value={account.country}
                onChange={e=>{setAccount({...account,country:e.target.value});}
              } 
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea3">
                <Form.Label>อำเภอ</Form.Label>
                <Form.Control 
                required
                type="text" 
                placeholder="อำเภอ"
                value={account.district}
                onChange={e=>{setAccount({...account,district:e.target.value});}
              } 
                />
              </Form.Group>
              
              <Form.Group controlId="exampleForm.ControlTextarea4">
                <Form.Label>ตำบล</Form.Label>
                <Form.Control 
                required
                type="text" 
                placeholder="ตำบล"
                value={account.district2}
                onChange={e=>{setAccount({...account,district2:e.target.value});}
              } 
                />
              </Form.Group></Col>

             <Col className="text-center ">
               <div>
             <FormImg/>
             </div>
             </Col>
              
              </Form.Row>
              <hr/>
            <div className="row  ">
               <div className="text-center container-fluid">
              <Link to="/login"><Button type="submit" className="button-w2" onClick={(event)=>handleSubmit(event)}>ตกลง</Button></Link>
                </div></div>
            
            </Form>
         
      </div>
    );
  }
//form กรอกข้อมูลสมัคร
//...account   ไม่ต้อง พิมพ์เยอะ

//useEffect  ดัก การเปลี่ยนแปลงcomponent