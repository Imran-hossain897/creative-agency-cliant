import React from 'react';
import AddminHeader from '../AddminHeader/AddminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import "./AddService.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt} from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const file = data.photo[0]
        const service = data.service
        const description = data.name
        const formData = new FormData()
        formData.append('file', file)
        formData.append('service', service)
        formData.append('description', description)

      
        fetch('https://morning-wave-36938.herokuapp.com/service', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
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
                        <form  onSubmit={handleSubmit(onSubmit)} className="m-5" action="">
                            <div className="form-group row d-flex pt-3">
                                <div className="col-md-8">
                                    <h5>Service List</h5>
                                    <input ref={register({ required: true })} type="text" name="service" className="form-control" placeholder="Enter Title" />
                                </div>
                                <div className="col-md-4">
                                    <h5>Icon</h5>
                                    <label for="file-upload" class="custom-file-upload">
                                    <FontAwesomeIcon icon={faCloudUploadAlt} />   Upload You project file
                                    </label>
                                    <input ref={register({ required: true })} name="photo" id="file-upload" type="file" />                                </div>
                            </div>
                            <div className="form-group pt-3">
                                <h5>Description</h5>
                                <textarea ref={register({ required: true })} name="adminDescription" className="form-control" id="" cols="1" rows="3" placeholder="Enter Designation"></textarea>
                            </div>
                            <div className="form-group  pt-3">
                                <button type="submit" className="btn add-btn btn-success "> Submit </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddService;