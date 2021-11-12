import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleMangeProduct from './SingleMangeProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://secure-garden-78114.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        const url = `https://secure-garden-78114.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Are you sure you want to delete the product?')
                    const remaining = products.filter(pd => pd._id !== id)
                    setProducts(remaining)

                }

            })

    }
    return (
        <div style={{ color: 'purple' }}>
            <h1>Manage Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">


                {products.length === 0 ? <Spinner style={{ marginLeft: "500px" }} animation="border" variant="primary" /> : products.map(pd => <SingleMangeProduct key={pd._id}
                    products={pd}
                    handleDelete={handleDelete}></SingleMangeProduct>)}


            </div>
        </div>
    );
};

export default ManageProducts;