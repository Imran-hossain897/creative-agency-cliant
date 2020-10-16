import React from 'react';
import "./Navbar.css"
import navLogo from "../../../../creative-agency-main/images/logos/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <img style={{width: "120px", marginLeft: "100px"}} src={navLogo} alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link nav-home" href="/home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active ml-5">
                        <a className="nav-link " href="portfolio">Our portfolio <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active ml-5">
                        <a className="nav-link" href="team">Our Team <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active ml-5 mr-5">
                        <a className="nav-link" href="contact">Contact us<span className="sr-only">(current)</span></a>
                    </li>
                    <Link to="login"><button type="button" class="btn nav-btn btn-dark">LogIn</button>
                    </Link>



                </ul>

            </div>
        </nav>
    );
};

export default Navbar;