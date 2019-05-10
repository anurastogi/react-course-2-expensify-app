import moment from 'moment';
import React from 'react';
import {Link} from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem =  ({id, description, amount, createdAt},props) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>
        {numeral(amount/100).format('$0,0.00')} 
        - 
        {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
       
    </div>
);

export default ExpenseListItem;