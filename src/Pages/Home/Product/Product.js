import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './product.css'


const Product = (props) => {
    const { name, img, description, _id, price } = props.products;



    return (
        <div className="col">

            <div className="card product h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">

                    <h3 style={{ color: 'hotpink' }} className="card-title fw-bold">{name}</h3>
                    <p className="card-text">{description}</p>
                    <h4 style={{ color: 'hotpink' }} className="fw-bold">Price:${price}</h4>
                    <Link to={`/products/${_id}`}>
                        <Button style={{ backgroundColor: "hotpink", border: "2px solid purple" }} className="text-white fw-bold ">Purchase</Button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Product;