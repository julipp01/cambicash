import React from 'react'
import { Switch, Route } from "react-router-dom";
import MainViewTwo from './viewTwo/Main';
/* import Confirmation from '../containers/confirmation-container'
import Notification from '../containers/notification-container' */

const MainRouter = () => (
 <div className="col-12 col-lg-9">
   <Switch>
     <Route exact path="/MainViewTwo" component={MainViewTwo} />
   </Switch>
 </div>
)

export default MainRouter