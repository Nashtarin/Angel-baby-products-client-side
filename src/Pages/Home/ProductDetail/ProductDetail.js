import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { appendErrors, useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import './productdetail.css'

const ProductDetail = () => {
    const { productId } = useParams();

    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://secure-garden-78114.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const { img, name, imported, price, description, delivery, quantity } = product;
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { user } = useAuth()
    const onSubmit = data => {
        console.log(data)
        fetch('https://secure-garden-78114.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Processed Successfully');

                    reset();
                }
            })
    };
    return (

        <div className="row row-cols-1 row-cols-md-2 g-2 mx-5 my-3">

            <div className="col">
                <div className="offerdetail card mx-auto my-4" style={{ width: '95%' }}>
                    <img style={{ height: "300px", borderRadius: "25px" }} src={img} className="card-img-top p-1" alt="..." />
                    <div className="card-body">
                        <h2 style={{ color: 'purple' }} className="card-title  fw-bold fs-1">{name}</h2>
                        <p className="card-text">{description}</p>
                        <h6 className="mb-3">Imported From: {imported} </h6>
                        <h6 className="mb-3">Delivery Duration: {delivery} </h6>
                        <h6 className="mb-3">Quantity:{quantity} </h6>
                        <h3 className="mb-3">Price: BDT {price}  </h3>
                    </div>
                    <h3 style={{ color: 'purple' }}>We guarantee, you will always feel comfort with our any kind of services </h3>
                </div>

            </div>

            <div className="col addoffer my-5">
                <h1 style={{ color: 'purple' }} className="mt-3">Please Enter Your Details</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}

                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email")} />
                    <input defaultValue={name} {...register("product", { required: true })} />
                    <input type="number" {...register("phone", { required: true })} placeholder="Enter Your Phone Number" />
                    <textarea {...register("address")} placeholder="Enter Your Address" />


                    <input defaultValue={price} {...register("price", { required: true })} />
                    <input defaultValue="Pending" {...register("status")} />


                    {errors.product && <span className="text-danger">Choose Your Product,it is required</span>}
                    {errors.price && <span className="text-danger">Price is required</span>}
                    {errors.phone && <span className="text-danger">Your phone number is required</span>}

                    <input style={{ backgroundColor: 'purple' }} className="btn text-white fw-bold" type="submit" value="Buy" />
                </form>

            </div>
        </div>
    );
};

export default ProductDetail;