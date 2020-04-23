import React from "react";
import Recipe from "./Recipe";

const Results = ({ recipes }) => {
  return (
    <div>
      {recipes.length === 0 ? (
        <h1>No Recipes found</h1>
      ) : (
        recipes.map(rec => (
          <Recipe
            name={rec.name}
            type={rec.type}
            age={rec.age}
            ingredients={rec.ingredients}
            method={rec.method}
            images={rec.image}
          />
        ))
      )}
    </div>
  );
};

export default Results;
