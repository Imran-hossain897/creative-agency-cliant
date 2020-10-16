import React, { createContext} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './comphonents/Home/Home/Home/Home';
import LogIn from './comphonents/LogIn/LogIn';
import { useState } from 'react';
import Order from './comphonents/Dashbord/Order/Order';
import ServiceList from './comphonents/Dashbord/ServiceList/ServiceList';
import Review from './comphonents/Dashbord/Review/Review';
import AdminService from './comphonents/DashbordAdmin/AdminService/AdminService';
import AddService from './comphonents/DashbordAdmin/AddService/AddService';
import AddAdmin from './comphonents/DashbordAdmin/AddAdmin/AddAdmin';
import PrivateRoute from './comphonents/LogIn/PrivateRoute';


export const userContext = createContext()


function App() {
  const [loggInUser, setLoggInUser] = useState({});

  return (
    <userContext.Provider value={[loggInUser, setLoggInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/login">
          <LogIn></LogIn>
        </Route>
        <PrivateRoute path="/order">     
             <Order></Order>
        </PrivateRoute>
        <Route path="/servicelist">
          <ServiceList></ServiceList>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <PrivateRoute path="/admin/service">
        <AdminService></AdminService>
      </PrivateRoute>
      <Route path="/admin/addservice">
        <AddService></AddService>
      </Route>
      <Route path="/admin/addadmin">
        <AddAdmin></AddAdmin>
      </Route>
      </Switch>
    </Router>
    </userContext.Provider>

  );
}

export default App;
