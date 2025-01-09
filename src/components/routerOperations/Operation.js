import React from 'react';
import { Routes, Route } from "react-router-dom";
import Converter from '../../containers/change-container';
import Confirmation from '../../containers/confirmation-container';
import Notification from '../../containers/notification-container';

const Operation = () => (
  <div className="col-lg-6">
    <Routes>
      <Route path="/" element={<Converter />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  </div>
);

export default Operation;
