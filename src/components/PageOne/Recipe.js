import React from "react";

class Recipe extends React.Component {
  render() {
    const ingredients = this.props.ingredients.map((ingredient, index) => (
      <li key={index + "-ing-"}>{ingredient}</li>
    ));

    const method = this.props.method.map((step, index) => (
      <li key={index + "-method-" + step}>{step}</li>
    ));

    return (
      <div className="recipe-box">
        <div className="recipe-txt">
          {" "}
          <h2 className="recipe-name">{this.props.name}</h2>
          <div className="type-age-container">
            <h5 className={"type-recipe-" + this.props.type}>
              {this.props.type}
            </h5>
            <h5 className={"age-recipe-" + this.props.age}>{this.props.age}</h5>
          </div>
          <ul>{ingredients}</ul>
          <ol> {method}</ol>
        </div>
        <div>
          <img
            key={this.props.image}
            className={"recipe-img"}
            src={this.props.images}
            alt="Rezeptbild"
          />
        </div>
      </div>
    );
  }
}

// keys are not unique! for each recipe they start from 0 for each <li>

export default Recipe;
