import React, { Component } from 'react';
// import logo from './logo.svg';
import FoodInventory from './FoodInventory';
import AddFoodForm from './AddFoodForm';

import MainNavigation from './MainNavigation';

var mainNav = [
    { 'id': 1, 'name': 'Ingredients', },
    { 'id': 2, 'name': 'Recipes' },
    { 'id': 3, 'name': 'Timers' }
];

class App extends Component {
    constructor() {
        super();
        this.addFood = this.addFood.bind(this);

        // getinitialState
        this.state = {
            foods: {}
        };
    }

    addFood(food) {
        // update our state
        const foods = {...this.state.foods};
        // add in our new fish
        const timestamp = Date.now();
        foods[`food-${timestamp}`] = food;
        // set state
        this.setState({ foods });
      }

    render() {
        return (
            <div className="app horizontal-layout rounded">
                <MainNavigation navList={mainNav}/>

                <div className="buttons buttons--vertical">
                    <button className="button button--touch" type="button" name="button">
                        <span>Dairy</span>
                    </button>
                    <button className="button button--touch" type="button" name="button">
                        <span>Protein</span>
                    </button>
                    <button className="button button--touch" type="button" name="button">
                        <span>Fruit</span>
                    </button>
                    <button className="button button--touch" type="button" name="button">
                        <span>Vegetables</span>
                    </button>
                    <button className="button button--touch" type="button" name="button">
                        <span>Grains</span>
                    </button>
                    <button className="button button--touch" type="button" name="button">
                        <span>Spices</span>
                    </button>
                    <button className="button button--touch" type="button" name="button">
                        <span>Other</span>
                    </button>
                    <button className="button button--touch" type="button" name="button">
                        <span>Search</span>
                    </button>
                </div>

                <main className="main">
                    <div className="content">
                        <AddFoodForm addFood={this.addFood}/>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
