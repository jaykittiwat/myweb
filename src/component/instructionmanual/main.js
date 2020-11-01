import React from "react";
import ReactExport from "react-export-excel";
import {Button} from "@material-ui/core"
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

;


class Download extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:null
        }
    }

    fetchData(){
        
        this.setState({...this.state,data:[
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
        ]})
    }
    render() {
        return (
            <div>
            <Button onClick={()=>this.fetchData()}>Fetch Data</Button>
            {this.state.data != null ? 
                <ExcelFile element={<button>Download Data</button>} hideElement={true}>
                    <ExcelSheet data={this.state.data} name="Employees"> 
                        <ExcelColumn label="Name" value="name"/>
                        <ExcelColumn label="Wallet Money" value="amount"/>
                        <ExcelColumn label="Gender" value="sex"/>
                        <ExcelColumn label="Marital Status" value={(col) => col.is_married ? "Married" : "Single"}/>
                    </ExcelSheet>
                </ExcelFile>
              :null
            }   
            </div>
        );
    }
}
export default Download;