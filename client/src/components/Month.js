import React, { Component } from 'react';
import Category from './Category';
import CategoryDetails from './CategoryDetails';
import './Month.css';

class Month extends Component {

    render() {
        let theDate = this.props.date;

        let categories = this.props.categories.slice();
        let others = this.props.expenses.slice();

        categories.forEach(category => {
            category.expenses =this.props.expenses.filter(item => category.items.includes(item.name));
            others = others.filter(item => category.expenses.indexOf(item) === -1);
        });

        categories.push({
            "name": "Other OUT",
            "expenses": others.filter(item => item.value < 0)
        });

        categories.push({
            "name": "Other IN",
            "expenses": others.filter(item => item.value >= 0)
        });

        let categoriesComponents = [];
        categories.forEach((category, key) => {
            if (category.expenses.length > 0) {
                categoriesComponents.push(
                    this.props.details  ? <CategoryDetails key={key} category={category}/> :<Category key={key} category={category}/>
                )
            }
        });

        let sum = this.props.expenses.reduce((sum, expense) => sum + expense.value, 0);

        return (
            <div className={this.props.details ? 'monthStatDetails' : 'monthStat'} onClick={!this.props.details && this.props.handleClick}>
                <div className="monthName">{theDate.toLocaleString('en-us', { month: 'long' })} {theDate.getFullYear()}</div>
                <div>{categoriesComponents}</div>
                {!this.props.details &&
                    <div className="monthStatSavings">
                        <div>Savings:</div>
                        <div>{sum.toFixed(2)}</div>
                    </div>
                }
            </div>
        );
    }
}

export default Month;
