import React,{useEffect,useState} from "react";
import Posts from './TableFatter';
//import Pagi from '../Pagination';
import HeaderLogin from "../../../../HeaderLogin";
import NavbarLogin from "../../../../Navbar";
//import {Pagination } from "react-bootstrap";
import "./../CowStyle.css";
import axios from 'axios';
//import { Next } from "react-bootstrap/PageItem";

export default function Fatter() {
 
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage] = useState(1);
  //setCurrentPage

  //จำนวนข้อมูล  ใน1หน้า
  const [postsPerPage] = useState(10);


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


// Get current posts
// indexOfLastPost =  1(เปลี่ยนค่าได้) * 10(หน้าแรก * 10แถว)
const indexOfLastPost = currentPage * postsPerPage;
// indexOfFirstPost = 10-10
const indexOfFirstPost = indexOfLastPost - postsPerPage;
// currentPost  = po posts.slice(indexแรก, indexสุดท้าย);
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// Change page
//pageNumber เมื่อคลิกหน้า 2  ค่าก็จะเปลี่ยน
//ส่ง funtionนี้เข้าไปในprops pigination
//const paginate = pageNumber => setCurrentPage(pageNumber);

/*const nextPage = () =>{
  let i=currentPage; 
 const y=posts.length;


  if(i<y/postsPerPage)
  {
        setCurrentPage(i+1)
     
  }
 
}

const PrevPage = () =>{
  let i=currentPage; 
  if(i>1)
  {
    console.log(i);
    setCurrentPage(i-1);
  }
    

  

 
}*/
  return (
    <div className="container-fluid" >
      <div className="row ">
        <HeaderLogin />
      </div>
      <div className="row Nav-shadow">
        <NavbarLogin />
      </div>
  <div className="box-border" >
    <Posts posts={currentPosts} loading={loading}/>
    <hr/>
    
</div>


     </div>
  );
}
/*
 https://mdbootstrap.com/docs/react/tables/datatables/

//npm install  mdbreact
//น่าจะเอาไว้รับผลมั้ง <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result>
 */
