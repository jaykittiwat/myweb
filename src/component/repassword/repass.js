import React,{Component} from "react";
import FromRepass from "./formRepassword";
import firebase from "../../backEnd/firebase";
import Header from '../../Header';
import imgcow1 from "../Img/cowWave2.jpg";
import "../styleWebpage.css";

class Repass extends Component {
render(){
  return (
    <div className="container-fluid">
   
      <Header />
      <div class="row">
      <img className="bg-img" src={imgcow1} alt="asd" />
      </div>
    
    <div className=" row " >
          <div className="row footer-padding container-fluid" >
            <div className="col-md-3" >
              <li className="footer-style2">ผู้พัฒนา</li>
              <ul>
                <li className="footer-style3">นายกิตติวัฒน์ ศรีชัยพล</li>
                <li className="footer-style3">นายไชยวัฒน์ อธิกรม</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li className="footer-style2">ที่ปรึกษา</li>
              <ul>
                <li className="footer-style3">ดร.ภูวิศสรณ์ ภูมิสรณคมณ์</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li className="footer-style2">ติดต่อได้ที่</li>
              <ul>
                <li className="footer-style3">0928412006</li>
                <li className="footer-style3">jaykittiwat2542@gmail.com</li>
              </ul>
            </div>
            <div className="col-md-3">
              <li className="footer-style2">หมายเหตุ</li>
              <ul>
                <li className="footer-style3">version 0.1(alpha)</li>
              
              </ul>
            </div>
          </div>
        </div>
  </div>
    
  );
}
}

export default Repass;