import React, { useState, useEffect } from 'react';
import './Search.css';
import Recipe from './Recipe';

function Search() {
  const [recipes, setRecipes] = useState([]);
  const [searchRecipe, setSearchRecipe] = useState('');

  const searchFn = async (e) => {
   
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${searchRecipe}&number=30&apiKey=4a9453ab05434d118b8efb95f685b7b1`
      );

      if (response.ok) {
        const data = await response.json();
        setRecipes(data.results);
      } else {
        console.error('Error fetching data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    searchFn();
    // eslint-disable-next-line
  }, [searchRecipe]);

  return (
    <div className="main-container">
      <form className="search-form" onSubmit={searchFn}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for recipe"
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
        />
       
      </form>
      <div className='recipes'>
        {recipes.length > 0 ? (
          recipes.map((item) => (
            <Recipe title={item.title} id={item.id} image={item.image} key={item.id} />
          ))
        ) : (
          <div className='no-items'>
            <h1>No items searched</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
