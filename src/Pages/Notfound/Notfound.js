import React from 'react';
import notfound from '../../images/404.jpg'

const Notfound = () => {
    return (
        <div className="mb-5">
        <h1 className='text-danger'>Oops!Page Not Found!</h1>


        <img className="w-75" src={notfound} alt="" />
    </div>
    );
};

export default Notfound;