import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Product from '../Home/Product/Product';

const Explore = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secure-garden-78114.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h1 style={{ color: 'hotpink' }} className="my-3">All of Our Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">


                {products.length === 0 ? <Spinner style={{ marginLeft: "500px" }} animation="border" variant="primary" /> : products.map(pd => <Product key={pd._id}
                    products={pd}></Product>)}


            </div>

        </div>
    );
};

export default Explore;