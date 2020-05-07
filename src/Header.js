import React,{Component} from 'react';
import './component/styleWebpage.css';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
      return(
          <div >
              <div className='row'>
                 <div className="col-md-5"> 
                <div className="row container-fluid r2-c1 ">เว็บแอปพลิเคชันระบบการจัดการแม่พันธุ์โค</div> 
                <div className="row  container-fluid r2-c1-t2">Webapplication Dam Management System</div>
            </div> 
               <div className="col-5"></div> 
            <div className="col-md-1 r2-c2"><Link to="/registor" className="r2-c2">ลงทะเบียน</Link></div>
            <div className="col-md-1 r2-c2 "> <Link to="/Loginpage" className="r2-c2">เข้าสู่ระบบ</Link> </div>
        </div>
        </div>
      
      )
  }
}
export default Header;