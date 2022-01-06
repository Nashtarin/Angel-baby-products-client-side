import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faHome, faIdCard, faLandmark, faMoneyBill, faPassport, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const SingleUser = (props) => {
    const { name, _id, email, product, phone, address, price, status } = props.user
    const { handleDelete, handleUpdate } = props
    return (
        <div className="col">
            <div style={{ backgroundColor: 'lightskyblue', border: "1px solid deepskyblue" }} className="card offer h-100">
                {/* <img src={img} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h4 className="card-title fw-bold text-primary">{name}</h4>
                    <h6 className="text-end text-success fs-5 fw-bold">Status:{status}</h6>
                    <h5 className="text-primary fw-bold">{product}</h5>
                    <h6><FontAwesomeIcon icon={faEnvelope} />{email}</h6>
                    <h6><FontAwesomeIcon icon={faPhone} />{phone}</h6>
                    <h6><FontAwesomeIcon icon={faHome} />{address}</h6>

                    <h5 className="text-primary fw-bold"><FontAwesomeIcon icon={faMoneyBill} /> Price:${price}</h5>


                    <Button onClick={() => handleDelete(_id)} variant="primary">Delete</Button>
                    <Button className="ms-5" onClick={() => handleUpdate(_id)} variant="primary">Update</Button>

                </div>
            </div>

        </div>
    );
};

export default SingleUser;