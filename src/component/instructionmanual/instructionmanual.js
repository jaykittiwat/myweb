import React,{Component} from 'react';
import HeaderLogin from './../../HeaderLogin';
import NavbarLogin from './../../demo';
import Detail from './detail';
class Header extends Component{
  render(){
      return(
          <div >
            <HeaderLogin/>
            <NavbarLogin/>
            <Detail/>
        </div>
      
      )
  }
}
export default Header

