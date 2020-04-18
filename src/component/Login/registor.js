import React,{Component} from "react";
import '../styleWebpage.css';
//import {Form} from 'react-bootstrap';
import FormData from './Form';
//import imgcow1 from "../Img/imgcow1.jpg";
//import FormImg from './FormImg';
//import { Button } from "react-bootstrap";
class Registor extends Component{
constructor(props){
    super(props);
    this.state={
        getLink:"https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"
    }
}

    render(){
        return(

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md"> 
                        <div className="row container-fluid r2-c1 ">เว็บแอปพลิเคชันระบบการจัดการแม่พันธุ์โค</div> 
                        <div className="row  container-fluid r2-c1-t2">Webapplication Dam Management System</div>
                    </div>
                </div>
                <hr/>
                <div className="row ">
                   
                <div className="title-regis container-fluid">ระบบลงทะเบียน</div>

                    <div className="col-12"><FormData/></div>

                    
                </div>
                <hr/>
              
                <div className="row">
                
                </div>

            </div>
        )
    }
}

export default Registor;