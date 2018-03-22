import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainViewTwo from './viewTwo/ViewTwo';
import MainViewOne from './viewOne/ViewOne';

const MainRouter = () => (
 <div>
   <Switch>
    <Route exact path="/" component={MainViewOne} />
    <Route exact path="/MainViewTwo" component={MainViewTwo} />
   </Switch>
 </div>
)

export default MainRouter