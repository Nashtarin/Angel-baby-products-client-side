import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const ReviewPart = () => {
    const [reviews,setReviews]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="col">
            
                  {
                      reviews.map(rw=><SingleReview
                      key={rw._id}
                      reviews={rw}></SingleReview>)
                  }

             
            
        </div>
    );
};

export default ReviewPart;