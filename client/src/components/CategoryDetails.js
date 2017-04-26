import React, { Component } from 'react';
import './CategoryDetails.css'

class CategoryDetails extends Component {
    render() {
        let sum = 0;
        let details = [];

        this.props.category.expenses.forEach((expense, key) => {
            details.push(
                <div key={key} className="categoryDetailsItem">
                    <div>{expense.name}</div>
                    <div>{expense.date}</div>
                    <div>{expense.value.toFixed(2)}</div>
                </div>
            )
           sum += expense.value;
        })

        return(
            <div className="categoryDetails">
                <h3>{this.props.category.name}</h3>
                <div>{details}</div>
                <div className="categoryDetailsTotal">
                    <div>Total:</div>
                    <div>{sum.toFixed(2)}</div>
                </div>
            </div>
        )
    }
}

export default CategoryDetails;
