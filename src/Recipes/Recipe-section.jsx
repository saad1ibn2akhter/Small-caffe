import './Recipe-data.json'
import { useEffect, useState } from 'react';
import '../Header/Navbar.css'
import './Recipe.css'
import Recipe from './Recipe';
// import Sidebar from './Sidebar';
import PropTypes from 'prop-types'
const RecipeSection = ({handleSelectedFood}) => {
    const [recipes, setRecipes] = useState([]);
   
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/saad1ibn2akhter/recipe-api/main/recipe-api.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    console.log(recipes.length);
    return (
        <section className="mx-auto container2 flex justify-between items-start space-x-4 font">

            {/* div for the recipes from the api */}

            <div className='grid grid-cols-1 max-w-[1170px] sm:grid-cols-2 gap-6'>
            {
                recipes.map(recipe => <Recipe
                recipe={recipe}
                key={recipe.recipe_id}
                handleSelectedFood={handleSelectedFood}
                // handleAddtoBookmarks={handleAddtoBookmarks}
                ></Recipe>)
            }
            </div>


            
        </section>
    )
}

Recipe.PropTypes =
{
    recipe:PropTypes.object.isRequired,
    // handleAddtoBookmarks:PropTypes.func,
}

export default RecipeSection;