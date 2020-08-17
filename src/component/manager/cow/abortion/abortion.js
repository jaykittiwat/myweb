import React,{Component} from "react";
import TableAbor from "./tableAbortion";
import HeaderLogin from "../../../../HeaderLogin";
import NavbarLogin from "../../../../Navbar";


class Abortion extends Component{
constructor(props){
  super(props)
  this.state={
    
  }
}
render(){
  return(
    <div className="container-fluid">
    <div className="row ">
      <HeaderLogin />
    </div>
    <div className="row Nav-shadow posi">
      <NavbarLogin />
    </div>
    <TableAbor />
  </div>
  )
}
}
export default Abortion


/*export default function Abortion() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow posi">
        <NavbarLogin />
      </div>
      <TableAbor />
    </div>
  );
}
*/