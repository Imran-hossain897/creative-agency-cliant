import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import AddminHeader from '../AddminHeader/AddminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useForm } from "react-hook-form";


const AdminService = () => {
    const { register} = useForm();

    const [users, setUsers] = useState([]);
    console.log(users)

    useEffect(() => {
        fetch('https://morning-wave-36938.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <section>
            <div>
                <AddminHeader></AddminHeader>
            </div>
            <div className="row container-fluid">

                <AdminSidebar></AdminSidebar>
                <div className="col-md-10">
                    <table className="table table-borderless">
                        <thead style={{ background: "#E5E5E5" }}>
                            <tr>
                                <th className="text-secondary text-left" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email Id</th>
                                <th className="text-secondary" scope="col">Service</th>
                                <th className="text-secondary" scope="col">Project Details</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                  users.map((user, index) =>  <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.projectName}</td>
                                <td>{user.projectDetalis}</td>
                                <td >
                                    
                            <select className="form-control" name="gender" ref={register({ required: true })} >
                                <option disabled={true}  value="Not set">Pending</option>
                                <option className="text-danger" value="Male">Pending</option>
                                <option className="text-success" value="Female">Done</option>
                                <option className="text-warning"  value="Not set">On going</option>
                            </select>
                                </td>
                            </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default AdminService;