import React, { useContext } from 'react';
import { userContext } from '../../../App';
import logo from "../../../creative-agency-main/images/logos/logo.png"


const DashbordHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <div style={{margin: "20px"}} className="row d-flex ">
            <div className="col-md-2">
                <img style={{width: "120px"}} src={logo} alt=""/>
            </div>
            <div className="col-md-8">
                <h3>order</h3>
            </div>
            <div className="col-md-2">
                <h3>{loggedInUser.displayName}</h3>
            </div>
        </div>
    );
};

export default DashbordHeader;