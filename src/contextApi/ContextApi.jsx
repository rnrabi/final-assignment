import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const ContextApi = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    // sign up user
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // social sign up
    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const twitterSignUp = () => {
        setLoading(true)
        // TODO...... 
    }

    // Login user
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        signUpUser,
        googleSignUp,
        twitterSignUp,
        logInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextApi;
ContextApi.propTypes = {
    children: PropTypes.node.isRequired
}