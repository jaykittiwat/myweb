import React from "react";

import Pdf from "react-to-pdf";


const ref = React.createRef();

function App() {
  return (
    <div >
      <Pdf targetRef={ref} filename="ข้อมูลพ่อแม่โคใน.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
}
export default App
