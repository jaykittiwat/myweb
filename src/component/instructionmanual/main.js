import React from "react";
import ReactExport from "react-export-excel";
import {Button} from "@material-ui/core"
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];


class Download extends React.Component {
    render() {
        return (
            <ExcelFile element={<Button variant="contained" style={{backgroundColor:"green" ,color:"#fff"}}>Download </Button>}>
                <ExcelSheet data={dataSet1} name="Employees" >
                    <ExcelColumn label="ชื่อ" value="name"   />
                
                </ExcelSheet>
            </ExcelFile>
        );
    }
}
export default Download;