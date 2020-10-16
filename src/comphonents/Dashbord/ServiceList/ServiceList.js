import { Avatar, Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import DashbordHeader from '../DashbordHeader/DashbordHeader';
import Sidebar from '../Sidebar/Sidebar';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    }
  }));

const ServiceList = () => {

  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  useEffect(() => {
      fetch('https://morning-wave-36938.herokuapp.com/orders?email='+loggedInUser.email)
      .then(res => res.json())
      .then(data => setOrders(data));
  }, [])
    const classes = useStyles();
    return (
        <section>
        <div>
        <DashbordHeader></DashbordHeader>
        </div>
        <div className="row container-fluid">
           
            <Sidebar></Sidebar>
           {   
      orders.map(order=> <div className="order-input col-md-10">
      <Card style={{marginTop: "20px"}} className={classes.root}>
  <CardHeader
    avatar={
      <Avatar aria-label="recipe" className={classes.avatar}>
        R
      </Avatar>
    }
   
    title={order.name}
     subheader=""

  />
  <CardContent>
    <Typography variant="body2" color="textSecondary" component="p">
    {order.projectDetalis}
    </Typography>
  </CardContent>
</Card>
      </div>)

           }
        </div>
    </section>
    );
};

export default ServiceList;