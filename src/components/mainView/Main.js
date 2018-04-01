import React from 'react';
import UserList from '../viewOne/UserList';
import Operation from '../routerOperations/Operation'


const  Main = ()=> (
 
      <div className="Main container-fluid">
      <div className="row">
      <UserList />
      <Operation/>
      </div>
      </div>
  
)

export default Main;
