import React from 'react';
import Feedback from '../../Feedback/Feedback';
import Header from '../../Header/Header/Header';
import OnlineService from '../../OnlineService/OnlineService';
import Works from '../../Works/Works';
import CompanyProvide from '../CompanyProvide/CompanyProvide';
import Footer from '../../Footer/Footer';


const Home = () => {
    return (
        <div>
           <Header></Header> 
           <CompanyProvide></CompanyProvide>
           <OnlineService></OnlineService>
           <Works></Works>
           <Feedback></Feedback>
           <Footer></Footer>

        </div>
    );
};

export default Home;