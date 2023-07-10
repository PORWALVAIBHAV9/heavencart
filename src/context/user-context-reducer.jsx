// import { createContext,useReducer, useEffect } from 'react';
// import { onAuthStateChangedListner } from '../utils/firebase/authentication';


// export const UserContext = createContext({
//     currentUser : null,
//     setCurrentUser: () => null 

// })
// export const USER_ACTION_TYPES={
//     SET_CURRENT_USER:'SET_CURRENT_USER'
// }

// const userReducer = (state, action)=>{
//     const {type, payload } = action;
//     console.log(2)
//     console.log(payload)

//     switch(type){
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {
//             ...state,
//             currentUser :payload
//             }
//         default:
//             throw new Error(`Unhandeled error type ${type} in useReducer`)
//             }

// }

// const INITIAL_STATE={
//     currentUser:null
// }



// export const UserProvider =({children})=>{
//     const [state, dispatch] = useReducer(userReducer,INITIAL_STATE)
//     console.log(state)
    
//     const {currentUser} = state
//     console.log(3)
//     console.log('j')
//     console.log(state)
    
//     const setCurrentUser = (user) =>{
//         console.log(1)
//         dispatch({type:USER_ACTION_TYPES.SET_CURRENT_USER, payload:user})
//     }

    
//     const value  = { currentUser, setCurrentUser }

//     useEffect(()=>{
//     const unsubscribe = onAuthStateChangedListner( (user) =>{
//         // console.log(user)
//         setCurrentUser(user);
//     } )
//     return unsubscribe

//     }, [])
//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }

 