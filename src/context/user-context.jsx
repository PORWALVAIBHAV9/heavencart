import { createContext, useState, useEffect } from 'react';
import { onAuthStateChangedListner } from '../utils/firebase/authentication';


export const UserContext = createContext({
    currentUser : null,
    setCurrentUser: () => null 

})

export const UserProvider =({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value  = { currentUser, setCurrentUser }

    useEffect(()=>{
    const unsubscribe = onAuthStateChangedListner( (user) =>{
        console.log(user)
        setCurrentUser(user);
    } )
    return unsubscribe

    }, [])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

 