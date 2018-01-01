import * as React from 'react';

class AddFoodForm extends React.Component {

    createFood(event) {
        event.preventDefault();
        console.log('adding food inventory item');
        const food = {
          name: this.name.value,
          category: this.category.value,
          image: this.image.value,
          quantity: this.quantity.value,
          quantityUnit: this.quantityUnit.value,
          purchaseDate: this.purchaseDate.value,
          expireOverride: this.expireOverride.value,
        }
        this.props.addFood(food);
        this.addFoodForm.reset();
      }

      render() {
        return (
            <form ref={(input) => this.addFoodForm = input} className="add-food-form" onSubmit={(e) => this.createFood(e)}>
                <input ref={(input) => this.name = input} type="text" placeholder="Name" />
                <input ref={(input) => this.Category = input} type="text" placeholder="Category" />                
                <input ref={(input) => this.image = input} type="text" placeholder="Image" />
                <input ref={(input) => this.quantity = input} type="text" placeholder="Quantity" />
                <input ref={(input) => this.quantityUnit = input} type="text" placeholder="Unit" />
                <input ref={(input) => this.purchaseDate = input} type="text" placeholder="Purchase Date" />
                <input ref={(input) => this.expireOverride = input} type="text" placeholder="Expire Override" />

                <button type="submit">Add Food to Pantry</button>
            </form>
        )
      }
}

AddFoodForm.propTypes = {
  addFood: React.PropTypes.func.isRequired
}

export default AddFoodForm;
