import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { Table,Spinner } from "react-bootstrap";

//ตาราง
const Posts = ({ posts, loading }) => {

  const [listCheck, setListCheck] = useState([]);
  const checkBoxValue = e => {
    let List = listCheck;
    if (List.includes(e.target.value)) {
      //ถ้าlistcheck value ที่เหทือนกันเข้ามา  จะทำการ ลบ
      //splice(index,1);Indext , จำนวนต้องการลบ
      List.splice(List.indexOf(e.target.value), 1);
      //ทำการลบ  listCheck ที่มาvalue นี้ ลบ 1ตัว
    } else {
      List.push(e.target.value);
    }
    setListCheck(List);
  };

 /* const showLog = () => {
    console.log("list", listCheck);
  };*/
  
  const showdata = () => {
    return posts.map(post => (
      <tr key={post.id}>
        <td>
          <FormControlLabel
            control={
              <Checkbox
                onChange={e => checkBoxValue(e)}
                value={post.id}
                color="primary"
              />
            }
          />
        </td>
        <td>{post.userId}</td>
        <td>{post.id}</td>
        <td>{post.title}</td>
      </tr>
    ));
  };

  if (loading) {
    return (<Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>);
  }

  return (
    <>
      <Table striped hover bordered   >
        <thead >
          <tr>
            <th>เลือก</th>
            <th>UserId</th>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{showdata()}</tbody>
      </Table>
    </>
  );
};

export default Posts;
