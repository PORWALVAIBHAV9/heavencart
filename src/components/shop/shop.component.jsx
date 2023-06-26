import CategoriesPreview from "../../Routes/category-preview/category-preview.component";
import {Routes, Route} from 'react-router-dom'
import SingleCategory from '../singlecategory/singlecategory.component'


const Shop= ()=>{

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>} />
            <Route path=":category" element={< SingleCategory />}></Route>
        </Routes>
    )
}

export default Shop