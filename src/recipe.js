import React from 'react';


const Recipe = ({ label, image, ingredients }) => {
    return (
        <div className='recipe'>
            <h1>{label}</h1>
            <img src={image} alt="" />
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;