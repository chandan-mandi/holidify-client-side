import React from 'react';
import { getAuth, signInWithPopup,signOut , GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../firebase/firebase.init';
import { useState } from 'react';
import { useEffect } from 'react';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
        })
        .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        })
    },[])

    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
    }

    return {
            signInUsingGoogle,
             user,
             logout,
             isLoading
            }
    
};

export default useFirebase;