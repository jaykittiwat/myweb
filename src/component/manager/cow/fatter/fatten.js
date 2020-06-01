import React,{useEffect,useState} from "react";
import TableFatter from './TableFatter';

import HeaderLogin from "../../../../HeaderLogin";
import NavbarLogin from "../../../../Navbar";

import "./../CowStyle.css";
import axios from 'axios';
//import { Next } from "react-bootstrap/PageItem";

export default function Fatter() {
 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
 


useEffect(()=>{
  const fetchPost=async()=>{
    setLoading(true);
    //set เป็น true เพื่อเข้าสู่สถานะโหลดข้อมูล
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    //await บรรทัดอยู้ข้างล่าง นี้   รอไปก่อน จนกว่าจะโลหดเสร็จ
    setPosts(res.data);
    setLoading(false);
  }
  fetchPost();
},[]);

  return (
    <div className="container-fluid">
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow">
        <NavbarLogin />
      </div>

    <TableFatter posts={posts} loading={loading}/>
   



     </div>
  );
}
/*
 https://mdbootstrap.com/docs/react/tables/datatables/

//npm install  mdbreact
//น่าจะเอาไว้รับผลมั้ง <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result>
 */
