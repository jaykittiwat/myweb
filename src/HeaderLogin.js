import React,{Component} from 'react';
import './component/styleWebpage.css';


class HeaderLogin extends Component{
  render(){
      return(
          <div className='container-fluid'>
              <div className='row '>
                 <div className="col-md-5"> 
                <div className="row container-fluid r2-c1 ">เว็บแอปพลิเคชันระบบการจัดการแม่พันธุ์โค</div> 
                <div className="row  container-fluid r2-c1-t2">Webapplication Dam Management System</div>
            </div> 
            </div>    
        </div>
      
      )
  }
}
export default HeaderLogin;
