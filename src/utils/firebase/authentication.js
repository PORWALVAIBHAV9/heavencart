// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut

} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query, 
    getDocs,
    
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPdObFHcwsAu-qmnIXHHbh2KJQ5mpYKjE",
    authDomain: "heaven-cart-db.firebaseapp.com",
    projectId: "heaven-cart-db",
    storageBucket: "heaven-cart-db.appspot.com",
    messagingSenderId: "464566934555",
    appId: "1:464566934555:web:cf7529ba8b82b78f4c2cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})




export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();


export const addCollectionAndDocument = async(collectionKey, objectToAdd)=>{
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectToAdd.forEach(object=>{
        const catdocRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(catdocRef, object)
        
    })

    await batch.commit();
    console.log('done')
}

export const getCategoriesAndDocuments = async( )=>{
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
        const {title, items}= docSnapshot.data();
        acc[title.toLowerCase()] = items
        return acc
    },[])

    return categoryMap;

    
}


export const createUserDocumentFromAuth = async(userAuth, additionalInformation ={}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    

    const usersnapShot = await getDoc(userDocRef);
    console.log(usersnapShot)
    console.log(usersnapShot.exists())

    if (!usersnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {   
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation


            }
            );
        }
        catch(err){
            console.log("error creating the user", err.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) =>{
    if (!email || !password) return;
    
    return await createUserWithEmailAndPassword(auth, email, password)

} 

export const signInUserWithEmailAndPassword = async(email, password) =>{
    if (!email || !password) return;
    
    return await signInWithEmailAndPassword(auth, email, password)

} 

export const onAuthStateChangedListner =(callback)=> onAuthStateChanged(auth, callback)

export const signOutUser = async() => await signOut(auth);