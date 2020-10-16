import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer style={{background: "#FBD062", height:"auto"}} className="footer-area  clear-both">
   <div className=" offset-md-1 container row d-flex pt-5">
            <div className="col-md-5">
                <h3>Let us handle your <br/> project, professionally.</h3>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6">
            <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name / company’s name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder=" Your message"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btn btn-dark"> Submit </button>
                       </div>
                   </form>
            </div>
            </div>
            <div style={{marginTop: "100px"}} className="copyRight text-center">
                <p>copyright Orange labs {(new Date()).getFullYear()}</p>
            </div>
        
    </footer>
    );
};

export default Footer;