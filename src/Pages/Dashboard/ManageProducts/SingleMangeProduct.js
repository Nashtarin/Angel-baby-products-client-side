import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleMangeProduct = (props) => {
    const {name, img, description,_id,price } = props.products;
    const {handleDelete}=props
    return (
        <div className="col">
           
        <div className="card product h-100">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
               
                <h3 style={{color:'hotpink'}} className="card-title fw-bold">{name}</h3>
                <p className="card-text">{description}</p>
                <h4  style={{color:'hotpink'}}className="fw-bold">Price:BDT {price}</h4>
                <Button onClick={()=>handleDelete(_id)} style={{backgroundColor:"purple",color:'white'}}>Delete</Button>
            </div>
        </div>

    </div>
    );
};

export default SingleMangeProduct;