import firebaseInit from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from 'react'

firebaseInit()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => setError(error.message))
    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => console.log(error.message))
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user);
                setUser(user)
            }
        })
    }, [])

    return {
        user,
        error,
        logout,
        signInWithGoogle
    }
}
export default useFirebase