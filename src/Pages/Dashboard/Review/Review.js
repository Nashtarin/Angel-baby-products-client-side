import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const {user}=useAuth()
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {console.log(data)
        fetch('http://localhost:5000/reviews',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.insertedId){
                alert('Review Added Successfully');
                
                reset();
            }
        })
    };
    return (
        <div className="col addoffer my-5 w-75 mx-auto">
            <h1 style={{color:"purple"}} className="mt-3">Please Write Your Review About Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName}{...register("name")} placeholder="Enter The Your Name" />
            +    
               
                <textarea  {...register("reviews")} placeholder="Please Write Your opinions about us" />
                <input  {...register("rating")} placeholder="Enter The rating in Number" />
            
                <input  {...register("img")} placeholder="Enter Your Image URL" />

             
                <input style={{backgroundColor:"rebeccapurple",color:"white"}} className="btn" type="submit" value="Add Review" />
            </form>


        </div>
    );
};

export default Review;