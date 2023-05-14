import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://car-doctor-server-wine-nu.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='py-20'>
            <div className="text-center mb-12">
                <span className='text-xl text-red-500 mb-3 block font-bold'>Service</span>
                <h1 className="text-5xl mb-4 font-bold">Our Service Area</h1>
                <p className="pb-6">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='md:grid md:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <button className="btn btn-outline btn-secondary mt-10">More Services</button>
            </div>
        </div>
    );
};

export default Service;