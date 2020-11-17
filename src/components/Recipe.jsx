import React from 'react'
import "./Recipe.css"

function Recipe({recipe}) {
    return (
        <div className="recipe">
            <div className="recipe-img">
                <img src={recipe.strMealThumb} alt="recipe_photo"/>
            </div>
            <div className="recipe-text">
                <div className="recipe-text-title">
                    <h1>{recipe.strMeal}</h1>
                </div>
                <div className="instructions">
                    <p>{`${recipe.strInstructions.substring(0,300)}...`}</p>
                </div>
                <div className="metadata">
                    <div className="area">
                        <h4>Country</h4>
                        <h5>{recipe.strArea}</h5>
                    </div>
                    <div className="category">
                        <h4>Category</h4>
                        <h5>{recipe.strCategory}</h5>
                    </div>
                    <div className="link">
                        <a href={recipe.strYoutube}>See on youtube</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;
