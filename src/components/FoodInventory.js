import * as React from 'react';
import FoodItem from './FoodItem';
import AddFoodForm from './AddFoodForm';


class FoodInventory extends React.Component {

    render() {

        return (
            <main className="food-inventory">
                {/* <ul className="food-inventory__list">
                    {
                    Object
                        .keys(this.state.foods)
                        .map(key => <FoodItem key={key} index={key} details={this.state.foods[key]} />)
                    }
                </ul> */}
                <AddFoodForm addFood={this.addFood}/>
            </main>
        );
    }
}

export default FoodInventory;
