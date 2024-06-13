import { TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';
import useAxiosPublic from "../hooks/useAxiosPublic";
// import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()

const ContextApi = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const axiosPublic = useAxiosPublic()
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
        return signInWithPopup(auth, twitterProvider)
    }

    // Login user
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log Out user
    const logOut = () => {
        return signOut(auth)
    }

    // observer 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        console.log(res.data.token)
                        localStorage.setItem('access-token', res.data.token)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])


    const authInfo = {
        user,
        loading,
        signUpUser,
        googleSignUp,
        twitterSignUp,
        logInUser,
        logOut
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