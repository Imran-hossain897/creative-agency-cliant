import React from 'react';
import AddminHeader from '../AddminHeader/AddminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import "./AddAdmin.css"
import { useForm } from "react-hook-form";


const AddAdmin = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://morning-wave-36938.herokuapp.com/addadmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(success => {
            alert("review successfully")
        })


        
    }
    return (
        <section>
            <div>
            <AddminHeader></AddminHeader>
            </div>
            <div className="row container-fluid">

                <AdminSidebar></AdminSidebar>
                <div className="order-input col-md-10">
                    <div className="admin-div" >
                        <form className="m-5" onSubmit={handleSubmit(onSubmit)} action="">
                            <div className="pt-3">
                                <h5>Email</h5>
                            </div>
                            <div className="form-group row d-flex admin-input">
                                <input ref={register({ required: true })} name="email" type="text" className="form-control" placeholder="jon@gmail.com" />
                                <button type="submit" className="btn btn-success ml-2"> Submit </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddAdmin;