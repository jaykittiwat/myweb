import React, { Component } from 'react';
import Monitor from './Monitor';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Login from './component/Login/login';


// Router to path component
class App extends Component{
  
  renderRouter(){
    return(
      <Switch>
        <Route exact path="/" component={Monitor}/>
        <Route path="/login" component={Login}/>
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
