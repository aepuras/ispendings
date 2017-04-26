import React from 'react';
import Month from './Month';
import './Stats.css';

const Stats = ({ expenses, categories, currentMonth, currentMonthExpenses, handleClick}) => {
    const months = expenses
        .map(expense => expense.date.slice(0, -3))
        .filter((elem, index, array) => index === array.indexOf(elem))
        .map(month => new Date(month));

    const monthsComponents = months.map((month, i) => {
        let monthExpenses = expenses.filter(expense => {
            let expenseDate = new Date(expense.date);
            return month.getYear() === expenseDate.getYear() &&
                month.getMonth() === expenseDate.getMonth();
        })
        return (
            <Month key={i}
                date={month}
                expenses={monthExpenses}
                categories={categories}
                handleClick={() => handleClick(month)}
            />)
    })

    return (
        <div>
            <div className="stat_thumbs">
                {monthsComponents}
            </div>
            <div className="stat_details">
                {currentMonth &&
                    <Month
                        date={currentMonth}
                        expenses={currentMonthExpenses}
                        categories={categories}
                        details="true"
                    />
                }
            </div>
        </div>
    );
}


export default Stats
