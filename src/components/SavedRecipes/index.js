import React from "react";
import "./index.css";

function SavedRecipes(props) {
  const deldata = (id) => {
    // Retrieving the saved recipes from local storage
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || [];

    // Finding the index of the item with the matching ID
    const index = savedRecipes.findIndex((item) => item.id === id);

    if (index !== -1) {
      // If the item was found, remove it from the array
      savedRecipes.splice(index, 1);

      // Updating local storage with the modified array
      localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));

      alert("recipe is removed from local storage successfully ");
    }
  };

  return (
    <div className="card">
      <img src={props.image} alt="--" />
      <h3>Title: {props.title}</h3>
      <button className="delbtn" onClick={() => deldata(props.id)}>
        Delete
      </button>
    </div>
  );
}

export default SavedRecipes;
