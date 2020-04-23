import React from "react";
import Navbar from "../Navbar";
import Recipes from "./Data";
import Results from "./Results";
import Footer from "../Footer";

class PageOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueAge: 5,
      valueType: "Abendbrei",
      filterRecipes: Recipes
    };
    this.handleChangeAge = this.handleChangeAge.bind(this);
    this.handleChangeType = this.handleChangeType.bind(this);
    this.handleFilterRecipes = this.handleFilterRecipes.bind(this);
  }

  componentDidMount() {
    this.setState({ recipes: Recipes });
  }

  handleChangeAge(event) {
    this.setState({
      valueAge: parseInt(event.target.value)
    });
  }

  handleChangeType(event) {
    this.setState({
      valueType: event.target.value
    });
  }

  handleFilterRecipes() {
    if (this.state.valueType === "all") {
      this.setState({
        filterRecipes: this.state.recipes.filter(recipe => {
          return recipe.age <= this.state.valueAge;
        })
      });
    } else {
      this.setState({
        filterRecipes: this.state.recipes.filter(recipe => {
          return (
            recipe.age <= this.state.valueAge &&
            recipe.type === this.state.valueType
          );
        })
      });
    }
  }
  render() {
    return (
      <div>
        <Navbar
          valueAge={this.state.valueAge}
          handleChangeAge={this.handleChangeAge}
          valueType={this.state.valueType}
          handleChangeType={this.handleChangeType}
          handleFilterRecipes={this.handleFilterRecipes}
        />

        <Results recipes={this.state.filterRecipes} />
        <Footer />
      </div>
    );
  }
}

export default PageOne;
