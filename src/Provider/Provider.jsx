import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';

const auth = getAuth(app);
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
const signIn = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logout =(email,password) =>{
    return signOut(auth)

}
useEffect(()=>{
 const unsubscirbe =   onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unsubscirbe();
    }
},[])
  const authInfo = { user, createUser, signIn,logout,loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;