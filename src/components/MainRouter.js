import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainViewOne from './viewOne/ViewOne';
import MainViewTwo from './viewTwo/ViewTwo';
import MainViewThree from './viewThree/Form';
import MainViewFor from './viewFor/Notification';

const MainRouter = () => (
 <div>
   <Switch>
    <Route exact path="/" component={MainViewOne} />
    <Route exact path="/MainViewTwo" component={MainViewTwo} />
    <Route exact path="/MainViewThree" component={MainViewThree} />
    <Route exact path="/MainViewFor" component={MainViewFor} />
   </Switch>
 </div>
)

export default MainRouter