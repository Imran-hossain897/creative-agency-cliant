import React from 'react';
import headerImg from "../../../../creative-agency-main/images/logos/Frame.png"
import "./HeaderMain.css"

const HeaderMain = () => {
    return (
        <main style={{height:'700px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1>Let's Grow Your <br/>  Brand To The <br/> Next Level</h1>
            <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Dolore eveniet necessitatibus et <br/> iusto corrupti minima.</p>
            <button className="btn btn-dark nav-btn">Hire us</button>
        </div>
        <div className="col-md-6">
            <img src={headerImg} alt="" className="img-fluid"/> 
        </div>
    </main>
        
    );
};

export default HeaderMain;