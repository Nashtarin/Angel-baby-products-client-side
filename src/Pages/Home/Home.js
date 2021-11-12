import React, { useEffect, useState } from 'react';
import Banner from './Banner/Banner';
import toys from '../../images/toys.jpg'
import { Spinner } from 'react-bootstrap';
import Product from './Product/Product';
import ReviewPart from './ReviewPart/ReviewPart';
import SingleReview from './ReviewPart/SingleReview';

const Home = () => {
    const [products, setProducts] = useState([])
    const [reviews,setReviews]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <h2 style={{color:'hotpink'}} className="my-3">Our Products</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
                

                {products.length===0?<Spinner style={{marginLeft:"500px"}}animation="border" variant="primary" />:products.slice(1,7).map(pd => <Product key={pd._id}
                    products={pd}></Product>)}


            </div>
            <h2 style={{color:'hotpink'}} className="my-3">Our Customer Reviews</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
            {
                      reviews.map(rw=><SingleReview
                      key={rw._id}
                      reviews={rw}></SingleReview>)
                  }

            </div>
            <div className="my-3">
                <h2 style={{ color: 'purple' }}>Keep Your Eyes On Our Page, Soon We Will Be Launching Toys</h2>
                <img style={{ width: "75%", borderRadius: "30px", border: "2px solid hotpink" }} src={toys} alt="" />

            </div>




        </div>
    );
};

export default Home;