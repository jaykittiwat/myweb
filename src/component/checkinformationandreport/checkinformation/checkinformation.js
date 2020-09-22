import React,{Component} from 'react';
import HeaderLogin from '../../../HeaderLogin';
import NavbarLogin from '../../../demo';
//import Chardata from './ChartData';
import TableCheckinfo from './tablecheckinfo';
import Footerversion from "./../../../footerversion";

class CheckingInformation extends Component{
  render(){
      return(
          <div >
            <HeaderLogin/>
            <NavbarLogin/>
            <TableCheckinfo/>
            <Footerversion/>
        </div>
      
      )
  }
}
export default CheckingInformation;
//<TableCheckinfo/>