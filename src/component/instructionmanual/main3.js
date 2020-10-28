import jsPDF from "jspdf";
import "jspdf-autotable";
import React from "react";
import {font} from './conten'

const App = () => {
  const [databody,setDatabody]=React.useState([])
  const [nameFarm,setNameFarm]=React.useState("")
  const [cattle_id,setCattle_id]=React.useState("")
  const [breed,setBreed]=React.useState("")
  const [sex,setSex]=React.useState("")
  const [owner,setOwner]=React.useState("")
  React.useEffect(() => {
    setOwner("นายกิตติวัฒน์ ศรีชัยพล")
    setBreed("บรามัน")
    setCattle_id("TS 60-2")
    setNameFarm("กิตติวัฒน์ฟาร์ม")
    setSex("MISS")
    setDatabody([ 
              ['2020-02-20', 'ท้องร่วง', 'ยาปฏิชีวนะ'],
              ['2020-02-21', 'ท้องร่วง', 'ยาปฏิชีวนะ']])
  }, []);
  const pdf = () => {
    const doc = new jsPDF()
    const content=font
    const finalY = doc.lastAutoTable.finalY || 10
    doc.addFileToVFS('THSarabunNew.ttf',content)
    doc.addFont('THSarabunNew.ttf', 'custom', 'normal');
    doc.setFont('custom');
    doc.setFontSize(24);

    doc.text('ใบประวัติการรักษา', 85, finalY + 15)
    doc.setFontSize(18)
    doc.text('ชื่อฟาร์ม:'+nameFarm, 14, finalY + 25)
    doc.text('หมายเลขโค:'+cattle_id, 14, finalY + 35)
    doc.text('สายพันธุ์:'+breed, 64, finalY + 35)
    doc.text('เพศ:'+sex,114, finalY + 35)
    doc.autoTable({
      startY: finalY + 40,
      head: [['วันที่', 'ผลการวินิฉัย', 'การักษา']],
      body:databody,
      headStyles: { font: "custom",fontSize:18,fillColor: [85,157,251]},
      bodyStyles: { font: "custom",fontSize:16},
      theme: 'grid',
    })
    doc.text("ลงชื่อ...........................................................", 120, doc.lastAutoTable.finalY + 15)
    doc.text("       (      " +owner+"      )", 120, doc.lastAutoTable.finalY + 22);
    doc.text("                     01/01/2020             ", 120, doc.lastAutoTable.finalY + 29);
    doc.save("table.pdf");
  };

  return (
    <div>
      <button onClick={() => pdf()}>PDF</button>
    </div>
  );
};
export default App;
