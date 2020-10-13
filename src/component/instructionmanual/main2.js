import React from "react";
import { CSVLink } from "react-csv";
const headers = [
  { label: "First Name", key: "firstname" },
  { label: "Last Name", key: "lastname" },
  { label: "Email", key: "email" },
];

const data = [
  { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
];

class Download extends React.Component {
  render() {
    return (
      <CSVLink  filename={"ประวัติการรักษา.csv"} data={data} headers={headers}  className="btn btn-success">
        Download me
      </CSVLink>
    );
  }
}
export default Download;
