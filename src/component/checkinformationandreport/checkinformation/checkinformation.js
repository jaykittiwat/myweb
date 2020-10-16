import React,{Component} from 'react';
import HeaderLogin from '../../../HeaderLogin';
import NavbarLogin from '../../../demo';
import TableCheckinfo from './tablecheckinfo';
import Footerversion from "./../../../footerversion";
import 'chartjs-plugin-datalabels';
import firebase from "./../../../backEnd/firebase";
import axios from "axios";
class CheckingInformation extends Component{
  constructor(props){
    super(props);
    this.state={
      UID:"",
      typedata2:[],
      data1:[],
      data2:[],
      data3:[],
      data4:[],
    }
  }
  componentDidMount(){

    this.setState({ ...this.state, loading: true });
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        axios
          .get("http://localhost:4000/user/logIn/" + user.email)
          .then(res => {
            this.setState({ ...this.state, UID: res.data[0].user });
          }).then( async()=>{
           const datacattle = await axios.get("http://localhost:4000/cattle/showAll/" +this.state.UID)
           const datacalf = await axios.get("http://localhost:4000/calf/calfshowAll/" +this.state.UID)

           const data1=datacattle.data[1]
           const s3=datacalf.data[1]
           let s1 = [];
           let s2 = []; 
            for (let i = 0; i <data1.length; i++) {
              if (data1[i].sex === 'MISS') {
               s1.push(data1[i]);
                  }
                  if (data1[i].sex === 'BULL') {
                    s2.push(data1[i]);
                       }
                }
              
                const getbreed=[]
                data1.map(d=>getbreed.push(d.breed))
                const a = getbreed.reduce(function (acc, curr) {
                  if (typeof acc[curr] == 'undefined') {
                    acc[curr] = 1;
                  } else {
                    acc[curr] += 1;
                  }
                
                  return acc;
                }, {});
                
                
                const dataset=[]//จำนวนชนิดโค
                dataset.push(s1.length)
                dataset.push(s2.length)
                dataset.push(s3.length)
               //สายพันธุ์
               
           this.setState({...this.state,data1:dataset,data2:a,loading:false})
          })
      }
    })
  }
  render(){
      return(
          <div >
            <HeaderLogin/>
            <NavbarLogin/>
            <TableCheckinfo posts={this.state}/>
            <Footerversion/>
        </div>
      
      )
  }
}
export default CheckingInformation;
//<TableCheckinfo/>