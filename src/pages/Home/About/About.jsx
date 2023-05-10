import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 h-96 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-2/4 absolute right-5 top-1/2 border-white border-t-8 border-l-8 h-64 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2'>
                    <span className='text-xl text-red-500 mb-5 block font-bold'>About Us</span>
                    <h1 className="text-5xl mb-5 font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-red-500 mt-6">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;