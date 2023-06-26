import './categorypreview.styles.scss'
import {useContext, Fragment} from 'react'
import { CategoryContext } from '../../context/category.context'
import  CategoryPreview  from '../../components/category-preview/category-preview.component'



const CategoriesPreview = ()=>{
    const {categoryMap} = useContext(CategoryContext)


    return(
        <Fragment>
            <div className='topshop'>
                {Object.keys(categoryMap).map(title=>(
                    <CategoryPreview title={title} categoriesMap={categoryMap}></CategoryPreview>
                

                ))

                }
            </div>
        </Fragment>




    )
}

export default CategoriesPreview;