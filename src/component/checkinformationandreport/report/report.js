import React,{Component} from 'react';
import HeaderLogin from '../../../HeaderLogin';
import NavbarLogin from '../../../demo';
import TableReport from './tableReport';
class Header extends Component{
  render(){
      return(
          <div >
            <HeaderLogin/>
            <NavbarLogin/>
            <TableReport/>
        </div>
      
      )
  }
}
export default Header;
