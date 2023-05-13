import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import CheckoutRow from './CheckoutRow';

const CheckoutLists = () => {
    const { user } = useContext(AuthContext);

    const [checkoutLists, setCheckoutLists] = useState([]);

    const url = `http://localhost:5000/checkouts?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCheckoutLists(data))
    }, [url])

    // handle delete 
    const handleDelete = id => {
        const proceed = confirm('Are you Sure! You want to delete?');

        if (proceed) {
            fetch(`http://localhost:5000/checkouts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = checkoutLists.filter(checkoutList => checkoutList._id !== id);
                        setCheckoutLists(remaining);
                        alert('Deleted Successfully.');
                    }
                })
        }
    }

    // handle checkout pending 
    const handleCheckoutPending = id => {
        fetch(`http://localhost:5000/checkouts/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                // update status
                const remaining = checkoutLists.filter(checkoutList => checkoutList._id !== id);
                const updated = checkoutLists.find(checkoutList => checkoutList._id === id);
                updated.status = 'confirm';
                const newCheckouts = [updated, ...remaining];
                setCheckoutLists(newCheckouts);
            }
        })
    }


    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-8">Awailable Booking Lists: {checkoutLists.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> </th>
                            <th>Service Picture</th>
                            <th>Service</th>
                            <th>User</th>
                            <th>Email</th>
                            <th>Prices</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            checkoutLists.map(checkoutList => <CheckoutRow
                                key={checkoutList._id}
                                checkoutList={checkoutList}
                                handleDelete={handleDelete}
                                handleCheckoutPending={handleCheckoutPending}
                            ></CheckoutRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default CheckoutLists;