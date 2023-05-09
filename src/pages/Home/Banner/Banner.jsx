import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
// linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0) 100%);
const Banner = () => {
    const bannerText = <>

        <div className='absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] top-0 bottom-0 left-0 right-0'>
            <div className='w-2/5 absolute top-1/2 -translate-y-1/2 left-20'>
                <h1 className='text-5xl text-white font-bold'>Affordable Price For Car Servicing</h1>
                <p className='text-white mt-6 mb-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <button className="btn btn-success">Discover More</button>
                <button className="btn ml-6 btn-outline btn-error">Latest Project</button>
            </div>
        </div>

    </>
    return (
        <div className="carousel w-full h-screen mt-4">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                {
                    bannerText
                }
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn bg-red-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                {
                    bannerText
                }
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide1" className="btn bg-red-600 btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn bg-red-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                {
                    bannerText
                }
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide2" className="btn bg-red-600 btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn bg-red-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                {
                    bannerText
                }
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide3" className="btn bg-red-600 btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn bg-red-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full" />
                {
                    bannerText
                }
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide4" className="btn bg-red-600 btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn bg-red-600 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full" />
                {
                    bannerText
                }
                <div className="absolute flex justify-end transform -translate-y-1/2  right-5 bottom-0">
                    <a href="#slide5" className="btn bg-red-600 btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn bg-red-600 btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;