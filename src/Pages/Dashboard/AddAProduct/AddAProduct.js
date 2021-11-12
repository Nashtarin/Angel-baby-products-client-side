import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://secure-garden-78114.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Product Added Successfully');

                    reset();
                }
            })
    };
    return (
        <div className="col addoffer my-5 w-75 mx-auto">
            <h1 style={{ color: "purple" }} className="mt-3">Please Add a Product Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input  {...register("name")} placeholder="Enter The Product Name" />
                <input  {...register("imported")} placeholder="Enter From Where The Product Imported" />
                <input  {...register("price")} placeholder="Enter The Product Cost" />
                <textarea  {...register("description")} placeholder="Enter The Product Description" />
                <input  {...register("quantity")} placeholder="Enter The Product Quantity" />
                <input  {...register("delivery")} placeholder="Enter The Product Delivery Time" />

                <input  {...register("img")} placeholder="Enter The Product Image URL" />
                <input style={{ backgroundColor: "rebeccapurple", color: "white" }} className="btn" type="submit" value="Add a Product" />
            </form>


        </div>
    );
};

export default AddAProduct;