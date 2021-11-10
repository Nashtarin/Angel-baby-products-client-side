import React from 'react';
import Banner from './Banner/Banner';
import toys from '../../images/toys.jpg'

const Home = () => {
    return (
        <div>
       <Banner></Banner>
       <div className="my-3">
                <h2 style={{color:'purple'}}>Keep Your Eyes On Our Page, Soon We Will Be Launching Toys</h2> 
                 <img style={{ width: "75%",borderRadius:"30px",border:"2px solid hotpink" }} src={toys} alt="" />

            </div>
            



        </div>
    );
};

export default Home;