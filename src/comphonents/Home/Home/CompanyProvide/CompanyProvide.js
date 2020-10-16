import React from 'react';
import google from "../../../../creative-agency-main/images/logos/google.png"
import netflix from "../../../../creative-agency-main/images/logos/netflix.png"
import slack from "../../../../creative-agency-main/images/logos/slack.png"
import uber from "../../../../creative-agency-main/images/logos/uber.png"
import airbnb from "../../../../creative-agency-main/images/logos/airbnb.png"
import "./CompanyProvide.css"


const CompanyProvide = () => {
    return (
        <div className="row align-items-center company">
            <div className="col-md-2 offset-md-2">
                <img src={slack} alt="" />
            </div>
            <div className="col-md-2">
                <img src={google} alt="" />
            </div>
            <div className="col-md-2">
                <img src={uber} alt="" />
            </div>
            <div className="col-md-2">
                <img src={netflix} alt="" />
            </div>
            <div className="col-md-2">
                <img src={airbnb} alt="" />
            </div>
        </div>
    );
};

export default CompanyProvide;