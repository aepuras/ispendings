import React, { Component } from 'react';
import './Category.css'

class Category extends Component {
    render() {
        let sum = 0;
        this.props.category.expenses.forEach(expense => {
           sum += expense.value;
        })

        return(
            <div className="monthStatCategory">
                <div>{this.props.category.name}</div>
                <div>{sum.toFixed(2)}</div>
            </div>
        )
    }
}

export default Category;
