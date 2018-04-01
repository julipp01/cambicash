import React from 'react'
import { Switch, Route } from "react-router-dom";
import Converter from '../../containers/converter-container';
import Confirmation from '../../containers/confirmation-container'
import Notification from '../../containers/notification-container'

const Operation = () => (
  <div className=" col-lg-6">
    <Switch>
      <Route exact path="/" component={Converter} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/notification" component={Notification} />
    </Switch>
  </div>
)

export default Operation