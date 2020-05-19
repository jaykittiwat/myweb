import React, { Component } from 'react';
import Monitor from './Monitor';
import {BrowserRouter,Route,Switch} from "react-router-dom";
//import Loginpage from './component/Login/Loginpage';
import Registor from './component/Login/registor';
import Registor2 from './component/Login/registor2';
import login from "./component/Login/login";
import regiscow from './component/regiscow/regiscow';
import fatten from "./component/manager/cow/fatten";
import induction from "./component/manager/cow/induction";
import breed from "./component/manager/cow/breed";
import checkup from "./component/manager/cow/checkup";
import calve from "./component/manager/cow/calve";
import abortion from "./component/manager/cow/abortion";
import dehorner from "./component/manager/calf/dehorner";
import wean from "./component/manager/calf/wean";
import hitnumber from "./component/manager/calf/hitnumber";
import treatment from "./component/treatment/treatment";
import notification from "./component/notification/notification";
import checkinformation from "./component/checkinformationandreport/checkinformation";
import report from "./component/checkinformationandreport/report";
import brandsetting from "./component/setting/brandsetting";
import drugsetting from "./component/setting/drugsetting";
import farmsetting from "./component/setting/farmsetting";
import usersetting from "./component/setting/usersetting";
import instructionmanual from "./component/instructionmanual/instructionmanual";

// Router to path component
class App extends Component{
  
  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Monitor}/>
        <Route path="/login" component={login}/>
        <Route path="/registor" component={Registor}/>
        <Route path="/registor2" component={Registor2}/>
        <Route path="/regiscow" component={regiscow}/>
        <Route path="/fatten" component={fatten}/>
        <Route path="/induction" component={induction}/>
        <Route path="/breed" component={breed}/>
        <Route path="/checkup" component={checkup}/>
        <Route path="/calve" component={calve}/>
        <Route path="/abortion" component={abortion}/>
        <Route path="/dehorner" component={dehorner}/>
        <Route path="/wean" component={wean}/>
        <Route path="/hitnumber" component={hitnumber}/>
        <Route path="/treatment" component={treatment}/>
        <Route path="/notification" component={notification}/>
        <Route path="/checkinformation" component={checkinformation}/>
        <Route path="/report" component={report}/>
        <Route path="/brandsetting" component={brandsetting}/>
        <Route path="/drugsetting" component={drugsetting}/>
        <Route path="/farmsetting" component={farmsetting}/>
        <Route path="/usersetting" component={usersetting}/>
        <Route path="/instructionmanual" component={instructionmanual}/>
      </Switch>
    )
  }
  render(){
    
    return(
      <div>
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    )
  }
}

export default App;