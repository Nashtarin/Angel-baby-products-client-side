import { faEnvelope, faLandmark, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../../images/logofinal.PNG'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "MediumPurple",height:'420px'}}>
        <div className='row row-cols-1 row-cols-md-2 g-1'>
            <div className="col">
                <div className="m-5">
                    <img style={{height:"150px"}}src={logo} alt="" />
                    <p className="text-white"><FontAwesomeIcon icon={faPhone} /> 01678877987,01786656768</p>
                    <p className="text-white"><FontAwesomeIcon icon={faEnvelope} /> info@angel.com</p>
                    <p className="text-white ms-4"><FontAwesomeIcon icon={faLandmark} /> 4/3, Block-D,Tajamahal Road ,Mohammadpur,Dhaka-1207</p>

                </div>
            </div>
            <div className="col">
                <div>
                    <h1 className='text-white text-center ms-3 mt-5'>Our Popular Products</h1>
                    <ul style={{ listStyle: "none" }}>
                        <li className="text-white text-decoration-underline">Baby Lotions</li>
                        <li className="text-white text-decoration-underline">Baby Powder</li>
                        <li className="text-white text-decoration-underline">Baby Soap</li>
                        <li className="text-white text-decoration-underline">Baby Shampoo</li>
                        <li className="text-white text-decoration-underline">Baby Wipes</li>
                        <li className="text-white text-decoration-underline">Baby Diapers</li>
                        <li className="text-white text-decoration-underline">Baby Beds</li>
                    </ul>
                </div>
            </div>
         

        </div>
        <span className="text-white me-1 mt-5">© 2021 All Rights Reserved by Angel Baby Products</span>
    </div>
    );
};

export default Footer;