import React, { useState } from "react";
import { Checkbox, FormControlLabel, Button } from "@material-ui/core";
import { Table, Spinner, Form,Col } from "react-bootstrap";

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
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <Form>
        <Form.Row >
        <Form.Group as={Col} md="2">
          <Form.Label>หมายเลข</Form.Label>
          <Form.Control type="text" placeholder="  ค้นหา" />
        </Form.Group>
        <Form.Group as={Col} md="1">
          <Form.Label>โรงเรือน</Form.Label>
          <Form.Control type="text" placeholder="  ค้นหา" />
        </Form.Group>
        <Form.Group as={Col} md="1">
          <Form.Label>คอก</Form.Label>
          <Form.Control type="text" placeholder="  ค้นหา" />
        </Form.Group>
        <Form.Group as={Col} md="1">
          <Form.Label>ฝูง</Form.Label>
          <Form.Control type="text" placeholder="  ค้นหา" />
        </Form.Group>
        </Form.Row>
      </Form>
      <Table hover className="table table-sm">
        <thead>
          <tr>
            <th>เลือก</th>
            <th>หมายเลขโค</th>
            <th>โรงเรือน</th>
            <th>คอก</th>
            <th>ฝูง</th>
          </tr>
        </thead>
        <tbody>{showdata()}</tbody>
      </Table>
      
    </>
  );
};

export default Posts;
