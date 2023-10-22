import React, { useState, useEffect } from 'react';

import SavedRecipes from '../../components/SavedRecipes';

function Cart() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Retrieve saved recipes from local storage
    const savedRecipesFromStorage = JSON.parse(localStorage.getItem('savedRecipes')) || [];

    // Set the saved recipes state
    setSavedRecipes(savedRecipesFromStorage);

    console.log('Saved Recipes:', savedRecipesFromStorage);
  }, [savedRecipes]);

  return (
    <div className="main-container">
         <h3>Saved Recipes</h3>
      <div className='recipes'>
       
        {savedRecipes.length > 0 ? (
          savedRecipes.map((item) => (
            <SavedRecipes title={item.title} id={item.id} image={item.image} key={item.id} />
          ))
        ) : (
          <div className='no-items'>
            <h1>No items saved</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
