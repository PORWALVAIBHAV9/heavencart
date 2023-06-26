import categories from '../components/category-items/category'
import CategoryItem from '../components/category-items/category-items.component'


const Home =() =>{
    return (
        
        <div className="categories-container">
    
          {categories.map((category) => (
    
            <CategoryItem key={category.id} category={ category }/>
            ))}
        </div>
    
        
      )
    
    };

export default Home;