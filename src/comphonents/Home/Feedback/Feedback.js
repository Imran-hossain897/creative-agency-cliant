import React, { useEffect, useState } from 'react';
import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';

   

const Feedback = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://morning-wave-36938.herokuapp.com/doingreview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
    <div>
    <h3 className="text-center mb-5">Clients <span className="text-brand">Feedback</span> </h3>
     <div className="row offset-md-1">
           { 
           reviews.map(review=><FeedbackDetails review={review}></FeedbackDetails>)
           }
        </div>
    </div>
    );
};

export default Feedback;