import React from "react";
import walpaper from "./../Img/imgcow3.jpg";
export default function Walpaper() {
  return (
    <div  square style={{ width: "100%", height: "720px" }}>
      <img className="bg-img" src={walpaper} alt="asd" />
    </div>
  );
}
