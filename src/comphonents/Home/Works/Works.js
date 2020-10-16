import React from 'react';
import "./Works.css"
import carousel1 from "../../../creative-agency-main/images/carousel-1.png"
import carousel2 from "../../../creative-agency-main/images/carousel-2.png"
import carousel3 from "../../../creative-agency-main/images/carousel-3.png"
import carousel4 from "../../../creative-agency-main/images/carousel-4.png"
import carousel5 from "../../../creative-agency-main/images/carousel-5.png"
import WorkCarsoul from '../WorkCarsoul/WorkCarsoul';
import Carousel from 'react-material-ui-carousel'



const worksImg =[
    {   name: "shakbi",
        img:carousel1
    },
    {   name: "shakbi",
        img:carousel2
    },
    {   name: "shakbi",
        img:carousel3
    },
    {   name: "shakbi",
        img:carousel4
    },
    {   name: "shakbi",
        img:carousel5
    }

]

const Works = () => {
    return (
        <div className="coursel-div">
            <h2 className="text-center"><span className="text-light">Here are some of</span><span className="text-brand"> our works</span></h2>
        <div className="d-flex">
        <Carousel className="paper-carsoul">
            {
                worksImg.map((img, i)=> <WorkCarsoul key={i} img={img}></WorkCarsoul>)
            }
            </Carousel>
        </div>
        </div>
    );
};

export default Works;