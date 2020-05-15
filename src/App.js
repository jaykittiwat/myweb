import React, { Component } from 'react';
import Monitor from './Monitor';
import {BrowserRouter,Route,Switch} from "react-router-dom";
//import Loginpage from './component/Login/Loginpage';
import Registor from './component/Login/registor';
import login from "./component/Login/login";
// Router to path component
class App extends Component{
  
  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Monitor}/>
        <Route path="/login" component={login}/>
        <Route path="/registor" component={Registor}/>
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
