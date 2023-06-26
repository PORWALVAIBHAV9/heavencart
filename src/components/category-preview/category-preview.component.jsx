import './categorypre.styles.scss'
import ProductCard   from '../product-component/product.component'
import {Link} from 'react-router-dom'


const categoryPreview = ({categoriesMap,title }) =>{
    const products = categoriesMap[title]
    console.log(products)
    return(
        <div className='category-preview-container'>
            <div className='titlediv'>
                <Link className='title' to={`/shop/${title}`}>{title.charAt(0).toUpperCase()+title.substr(1)}</Link>
            </div>
            <div className='preview'>
                {products.filter((prod, indx)=> indx<4).map((product)=>(
                
                    <ProductCard key={product.id} products={product}></ProductCard>
    

                ))}

            </div>
        </div>
    )
}

export default categoryPreview