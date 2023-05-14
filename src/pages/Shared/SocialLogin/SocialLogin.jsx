import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from, { replace: true });
        })
        .catch(err => {
            console.log(err.message)
        })
    }


    return (
        <div>
            <div className="divider font-bold">OR</div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FcGoogle className='text-4xl'></FcGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;