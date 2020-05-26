
import React from 'react';
import {Link} from 'react-router-dom'
import{Pagination} from 'react-bootstrap'
//ปุ่ม เปลี่ยนหน้าตาราง

// props จากหน้าหลัก {จำนวนแถว,array ของชุดข้อมูลทั้งหมด,เลขหน้าpagination ที่เรากด}
const Pagination1 = ({ postsPerPage, totalPosts, paginate }) => {
  //array เก็บจำนวนหน้า
  const pageNumbers = [];
//วน i=1 น้อยกว่า ค่าarray หาร จำนวนข้อมูล แต่ละหน้า เพิ่มที่ละ 1
//สมมติ i=1,i<=(200/10)[หมายความว่า มี อยู่ 20sหน้า,i++]
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    //จะได้เลขpagination 20หน้า
    pageNumbers.push(i);
    
  }
//mapเลขออกมา
const numberPage=()=>{
return (
    pageNumbers.map(number => (
        <div  key={number} >
          <Link to='/fatten#'><Pagination className="col" onClick={() => paginate(number)} >
            {number}
          </Pagination></Link>
        </div>
      ))
)
}
  return (
    
      <div className="row" >
      
          {numberPage()}
        
       
      </div>
    
  );
};

export default Pagination1;