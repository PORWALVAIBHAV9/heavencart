import './singlecategory.styles.scss'
import {useParams} from 'react-router-dom'
import { useContext, useState, useEffect, Fragment } from 'react'
import { CategoryContext } from '../../context/category.context'
import ProductCard from '../product-component/product.component'


const SingleCategory = ()=>{
    const {categoryMap} = useContext(CategoryContext)
    const {category}= useParams();
    const [products, setProducts] = useState([])

    useEffect(()=>{
        setProducts(categoryMap[category])

    },[categoryMap, category])

    return(
        <Fragment>
            <h2 className='single-title'>{category.toUpperCase()}</h2>
            <div className='product-container'>


                {products && products.map(product=>(
                    <ProductCard key={product.id} products={product} ></ProductCard>

                
                ))}
            </div>
        </Fragment>
    )


    


}

export default SingleCategory