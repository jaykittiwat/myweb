import React,{Component} from 'react';
import HeaderLogin from './../../HeaderLogin';
import NavbarLogin from './../../demo';
import Main from './main3'
class Header extends Component{
  render(){
      return(
          <div >
            <HeaderLogin/>
            <NavbarLogin/>
            <Main/>
        </div>
      
      )
  }
}
export default Header;

