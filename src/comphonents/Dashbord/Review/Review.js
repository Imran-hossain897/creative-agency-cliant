import React from 'react';
import DashbordHeader from '../DashbordHeader/DashbordHeader';
import Sidebar from '../Sidebar/Sidebar';
import "./Review.css"
import { useForm } from "react-hook-form";


const Review = () => {

    const { register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        fetch('https://morning-wave-36938.herokuapp.com/review', {
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
            <form onSubmit={handleSubmit(onSubmit)} action="">
                   <div className="form-group  mt-5">
                       <input ref={register({ required: true })} name="name" type="text" className="form-control" placeholder="Your name"/>
                   </div>
                   <div className="form-group">
                       <input ref={register({ required: true })} name="companyName" type="text" className="form-control" placeholder="Company’s name, Designation"/>
                   </div>
                   <div className="form-group">
                       <textarea ref={register({ required: true })}  name="description" className="form-control" id="" cols="1" rows="3" placeholder="Description"></textarea>
                   </div>
                   <div  className="form-group review-btn">
                       <button type="submit " className="btn btn-dark"> Submit</button>
                   </div>
               </form>
            </div>
        </div>
    </section>
    );
};

export default Review;