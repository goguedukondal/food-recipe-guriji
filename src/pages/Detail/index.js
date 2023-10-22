import React, { useState, useEffect } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';

function Detail() {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Define the API URL with your API key
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&instructionsRequired=false&apiKey=4a9453ab05434d118b8efb95f685b7b1`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setRecipe(data))
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const saveRecipe = () => {
    // Check if a recipe is loaded
    if (recipe) {
      // Get the current saved recipes from local storage or initialize an empty array
      const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

      // Add the current recipe to the saved recipes array
      savedRecipes.push(recipe);

      // Save the updated array back to local storage
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));

      alert('Recipe saved to local storage!');
    }
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className='detail-container'>
      <div className='image-container'>
        <img className='image' src={recipe.image} alt={recipe.title} />
      </div>
      <div className='information-container'>
        <h2 className='title'>
          Title: <span>{recipe.title}</span>
        </h2>
        <p className='ingredients'>
          Ingredients: <span>{recipe.extendedIngredients.map((ingredient) => ingredient.name).join(', ')}</span>
        </p>
        <p className='instructions'>
          Cooking instructions: <span>{recipe.instructions}</span>
        </p>
        <button onClick={saveRecipe}>Save</button>
      </div>
    </div>
  );
}

export default Detail;
