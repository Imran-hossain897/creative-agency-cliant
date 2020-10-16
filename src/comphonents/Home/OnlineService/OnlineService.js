import React from 'react';
import webDesign from '../../../creative-agency-main/images/icons/service1.png'
import grpicDesign from '../../../creative-agency-main/images/icons/service2.png'
import webDevlopment from '../../../creative-agency-main/images/icons/service3.png'
import OnlineServiceCard from '../OnlineServiceCard/OnlineServiceCard';



const service =[
    {
        img: webDesign,
        name:"Web & Mobile design",
        details:"We craft stunning and amazaing web Ul using drrafted UX to fit your product."
    },
    {
        img: grpicDesign,
        name:"grpic design",
        details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, temporibus? "
    },
    {
        img:webDevlopment,
        name: 'webDevlopment',
        details:" To ignore, add // eslint-disable-next-line to the line before."
    }
    
]

const OnlineService = () => {
    return (
        <div>
            <h2 className="text-center mb-5">provide awesome <span className="text-brand">service</span></h2>
            <div className="row">
                {
                    service.map(service=><OnlineServiceCard service={service}></OnlineServiceCard>)
                }
            </div>
        </div>
    );
};

export default OnlineService;