import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);
    console.log(user)
    const car = useLoaderData();

    const { title, img, _id, price } = car;
    // console.log('car', car)

    const handleCheckOut = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        // const price = form.price.value
        const checkOutInfo = {
            CustomerName: name,
            date,
            img,
            email,
            service: title,
            service_id: _id,
            price
        }
        console.log(checkOutInfo)

        fetch(`https://car-doctor-server-wine-nu.vercel.app/checkouts`, {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(checkOutInfo)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Ordered Successfully')
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card w-full  shadow-2xl bg-base-100">
                    <h2 className="text-4xl text-center mt-6 font-bold">Please Checkout</h2>
                    <form onSubmit={handleCheckOut}>
                        <div className="card-body">
                                <h2 className="text-2xl my-4 text-center font-semibold">Service Name: {title}</h2>
                            <div className="flex justify-around gap-5">

                                <div className="form-control  mt-5 w-full">
                                    <input defaultValue={user?.displayName} type="text" placeholder="Your Name" name='name' className="input input-bordered" />
                                </div>

                                <div className="form-control mt-5 w-full">
                                    <input type="date" placeholder="Date" name='date' className="input input-bordered" />
                                </div>

                            </div>
                            <div className="flex justify-around gap-5">

                                <div className="form-control mt-5 w-full">
                                    <input defaultValue={user?.email} type="email" placeholder="Email" name='email' className="input input-bordered" />
                                </div>

                                <div className="form-control mt-5 w-full">
                                    <input defaultValue={'$' + price} type="text" placeholder="Due Amount" name='price' className="input  input-bordered" />
                                </div>

                            </div>

                            <div className="form-control w-full">
                                <textarea rows='6' name='details' className="textarea textarea-primary mt-5 border-gray-200" placeholder="Service Details"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Order confirm</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;