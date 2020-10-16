import React from 'react';
import DashbordHeader from '../DashbordHeader/DashbordHeader';
import Sidebar from '../Sidebar/Sidebar';
import "./Order.css"
import { useForm } from "react-hook-form";


const Order = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://morning-wave-36938.herokuapp.com/orderproducts', {
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
            <DashbordHeader></DashbordHeader>
            </div>
            <div className="row container-fluid">
               
                <Sidebar></Sidebar>
                <div className="order-input col-md-10">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                       <div className="form-group  mt-5">
                           <input ref={register({ required: true })} type="text" className="form-control" name="name" placeholder="Your name / company’s name"/>
                       </div>
                       <div className="form-group">
                           <input ref={register({ required: true })} type="text" className="form-control" name="email" placeholder="Your Email Address"/>
                       </div>
                       <div className="form-group">
                           <input ref={register({ required: true })} type="text" className="form-control" name="projectName"  placeholder="Graphic Design"/>
                       </div>
                       <div className="form-group">
                           <textarea ref={register({ required: true })} name="projectDetalis" className="form-control" id=""  cols="1" rows="3" placeholder=" Project details"></textarea>
                       </div>
                       <div className="form-group">
                           <input ref={register({ required: true })} type="number" className="form-control" name="price"  placeholder="Price"/>
                       </div>
                       <div className="form-group">
                           <button type="submit" className="btn btn-dark"> Send </button>
                       </div>
                   </form>
                </div>
            </div>
        </section>
    );
};

export default Order;