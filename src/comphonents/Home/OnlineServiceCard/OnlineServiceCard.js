import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { userContext } from '../../../App';
import './OnlineServiceCard.css'


const OnlineServiceCard = ({service}) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
      fetch('https://morning-wave-36938.herokuapp.com/isAdmin', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => setIsAdmin(data));
  }, [])

  const history = useHistory()
   const handleService = () =>{
    isAdmin ? history.push("/admin/service") : history.push("/order")
  }
    return (
      <section onClick={handleService} className="col-md-3  offset-md-1 p-5 card-hover">
        <div className="p-5">
         <img className="img-size" src={service.img} alt=""/>
          <h5>{service.name}</h5>
          <p>{service.details}</p>
         </div>
      </section>
    );
};

export default OnlineServiceCard;