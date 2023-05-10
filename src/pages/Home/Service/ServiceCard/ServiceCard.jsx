import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} alt="Service-Image" /></figure>
            <div className="card-body">
                <h2 className="card-title font-semibold">
                    {title}
                </h2>
                <p className='text-red-500 mt-4 flex justify-between items-center'> <span>Prices: ${price}</span>  <Link className='text-xl font-bold' to={`/services/${_id}`}><BsArrowRight></BsArrowRight></Link></p>

            </div>
        </div>
    );
};

export default ServiceCard;