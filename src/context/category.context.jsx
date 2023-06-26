import {createContext, useState, useEffect} from 'react';

import SHOP_DATA from '../assets/shop.comonent.js'

import { addCollectionAndDocument,getCategoriesAndDocuments } from '../utils/firebase/authentication.js'




export const CategoryContext = createContext({
    categoryMap: {}
})




export const CategoryProvider = ({children}) =>{
    const [categoryMap, setCategoryMap] = useState({})
    const value = { categoryMap } 

    // useEffect(()=>{
    //     addCollectionAndDocument('categories', SHOP_DATA)

    // },[])

    useEffect(()=>
    {
        const getCategoryMap = async()=>{
        const categoryMap = await getCategoriesAndDocuments()
        console.log(categoryMap)
        setCategoryMap(categoryMap)
        
    }
    getCategoryMap()
    
        
    },[])

    return(
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
}