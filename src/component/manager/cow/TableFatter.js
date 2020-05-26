import React, { useState, useEffect } from "react";
import { Checkbox, FormControlLabel, Button } from "@material-ui/core";
import { Table } from "react-bootstrap";

//ตาราง
const Posts = ({ posts, loading }) => {
  /* 
//test
const ID_BOOK=['1','2','3','4','5']
const LIST=[
  {
    label:"No.1",value:"1"
  },
  {
    label:"No.2",value:"2"
  },
  {
    label:"No.3",value:"3"
  },
  {
    label:"No.4",value:"4"
  },
  {
    label:"No.5",value:"5"
  },

]
*/
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

  const showLog = () => {
    console.log("list", listCheck);
  };
  /*
  return (
    <div className="row">
  {
    LIST.map((val,i)=>{
      return(
        <FormControlLabel
        key={i}
        control={
          <Checkbox
            //checked={state.checkedB}
            onChange={e=>checkBoxValue(e)}
            value={val.value}
            //name="checkedB"
            //color="primary"
          />
        }
        label={val.label}
      />
      )
    })
  }
      
      <Button  onClick={()=>show()}>click</Button>
    
    </div>
  );
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
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>เลือก</th>
            <th>UserId</th>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>{showdata()}</tbody>
      </Table>
      <Button onClick={() => showLog()}>Click</Button>
    </>
  );
};

export default Posts;
