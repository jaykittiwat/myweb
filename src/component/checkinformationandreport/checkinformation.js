import React,{Component} from 'react';
import HeaderLogin from './../../HeaderLogin';
import NavbarLogin from './../../Navbar';
import Chardata from './ChartData';
class CheckingInformation extends Component{
  render(){
      return(
          <div >
            <HeaderLogin/>
            <NavbarLogin/>
            
            <Chardata/>
            
            
        </div>
      
      )
  }
}
export default CheckingInformation;
