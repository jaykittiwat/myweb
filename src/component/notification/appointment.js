import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
export default function Appointment(model) {
  const { appointmentData } = model.data;
  
  return (
    <Link style={{textDecoration:'none',color:'#fff',outline:"none"}}
      to={
        "/" + appointmentData.linktype === "บำรุงแม่พันธุ์"
          ? "fatten"
          : appointmentData.linktype === "เหนี่ยวนำกลับสัด"
          ? "induction"
          : appointmentData.linktype === "ผสมพันธุ์"
          ? "breed"
          : appointmentData.linktype === "ตรวจท้อง"
          ? "checkup"
          : appointmentData.linktype === "วันคลอด"
          ? "calve"
          : appointmentData.linktype === "รักษาหลังคลอด"
          ? "treatment"
          : appointmentData.linktype === "ติดตามการรักษา"
          ? "#"
          : appointmentData.linktype === "บำรุงแม่พันธุ์"?'fatten':'#'
      }
    >
      <div className="showtime-preview">
        <Button style={{textDecoration:'none',color:'#fff',outline:"none",fontSize:"14px"}}> {appointmentData.text}</Button>
      </div>
    </Link>
  );
}
