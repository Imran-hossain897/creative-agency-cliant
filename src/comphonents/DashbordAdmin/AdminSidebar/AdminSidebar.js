import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faShoppingBasket, faPlus} from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
        <ul className="list-unstyled">
           
            <div>
                <li>
                    <Link to="/admin/service" className="text-dark ">
                        <FontAwesomeIcon icon={faShoppingBasket} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addservice" className="text-dark">
                        <FontAwesomeIcon icon={faUserAlt} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin/addadmin" className="text-dark">
                        <FontAwesomeIcon icon={faPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
            
            </div>
        </ul>
      
    </div>
    );
};

export default AdminSidebar;