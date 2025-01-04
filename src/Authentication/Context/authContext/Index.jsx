import { useEffect, useState } from "react";
const AuthContext = React.createContext();

export function AuthContext({children}){
    const{currentUser,setCurrentUser}=useState(null);
    const{userLoggedin,setuserLoggedin}=useState(false);
    const{loading,setloading}=useState(true);

    useEffect(()=>{
        
    })
}