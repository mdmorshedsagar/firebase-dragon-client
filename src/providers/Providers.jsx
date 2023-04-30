import React, { createContext, useEffect, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { app } from '../Firebase/Firebase';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Providers = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);

  const createRegister = (email,password)=>{
    setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password);
  };
  const createLogin = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }
  const createGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }
  const createGithub = ()=>{
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
        console.log('static position')
        setLoading(false)
        setUser(loggedUser)
    })
    return ()=>{
        console.log("cut of position")
        unsubscribe();
    }
  },[])
  const createLogout = ()=>{
    setLoading(true)
    return signOut(auth)
}
    const authInfo ={
       user,
       createRegister,
       createLogin,
       createLogout,
       loading,
       createGoogle,
       createGithub
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Providers;