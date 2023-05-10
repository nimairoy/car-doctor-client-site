import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user / sign up
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in / login
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // handle on auth state
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged( auth, currentUser => {
            setUser(currentUser);
            console.log('Current User is:' , currentUser);
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const authInfo ={
        user, 
        loading,
        createUser,
        userSignIn,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;