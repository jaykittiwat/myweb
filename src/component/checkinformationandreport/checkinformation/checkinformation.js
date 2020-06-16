//โมดูลการรักษา
import React,{Component} from 'react';
import HeaderLogin from './../../../HeaderLogin';
import NavbarLogin from './../../../Navbar';
import TableCheckinfo from './tableCheckinfo';
class Checkinformation extends Component{
  render(){
      return(
        <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div >
      <TableCheckinfo />
    </div>
      
      )
  }
}
export default Checkinformation;
