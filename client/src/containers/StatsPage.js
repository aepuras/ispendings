import React from 'react';
import axios from 'axios-es6';
import Auth from '../modules/Auth';
import Stats from '../components/Stats.js';


class StatsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            expenses: [],
            currentMonth: null,
            currentMonthExpenses: null
        };
    }

    handleClick = (month) => {
        let cms = this.state.expenses.filter(expense => {
                let expenseDate = new Date(expense.date);
                return month.getYear() === expenseDate.getYear() &&
                    month.getMonth() === expenseDate.getMonth();
            });

        this.setState({
            currentMonth: month,
            currentMonthExpenses: cms
        });
    }

  componentDidMount() {
    let config = {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'bearer ' + Auth.getToken()
        }
    };

     axios.get('/api/categories', config)
        .then(function (response) {
            this.setState({
                categories: response.data.items
            });
        }.bind(this));

    axios.get('/api/expenses', config)
        .then(function (response) {
            this.setState({
                expenses: response.data.items.map((item) => {
                    if(typeof(item.value) === 'string') {
                        item.value = parseFloat(item.value.replace(/ /g, '').replace(',', '.'));
                    }
                    return item;
                })
            });
        }.bind(this));
  }

    render() {
        return (
            <Stats
                categories={this.state.categories}
                expenses={this.state.expenses}
                currentMonth={this.state.currentMonth}
                currentMonthExpenses={this.state.currentMonthExpenses}
                handleClick={this.handleClick}
            />
        );
    }

}

export default StatsPage;
