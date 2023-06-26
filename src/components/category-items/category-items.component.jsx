import './category-items.scss'
import {Link} from 'react-router-dom'



const CategoryItem = ({category}) =>{
    const { imageUrl, id, title} = category;
    return(
        <div key={id} className="category-container">
          <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
          <div className="category-body-container">
          <Link className='title' to={`/shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link>
            <Link className='title' to={`/shop/${title.toLowerCase()}`}>SHOP NOW</Link>


          </div>
        </div>
    )
}

export default CategoryItem