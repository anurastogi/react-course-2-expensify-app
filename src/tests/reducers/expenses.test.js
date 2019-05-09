import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {
        type : '@@INIT'
    });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if id not found', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);

})

test('should add an expense', () => {
    const newExpense = {
        id: '4',
        description : 'Buy grocery',
        note : 'Some shopping',
        amount : 1000,
        createdAt : moment(0).add(2, 'days').valueOf()
    }
    const action = {
        type : 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
})

test('should edit an expense', () => {
    const updates = {
        description : 'new desc'
    }
    const action = {
        type : 'EDIT_EXPENSE',
        id : expenses[2].id,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toBe('new desc')
})

test('should not edit an expense if expense not found', () => {
    const updates = {
        description : 'new desc'
    }
    const action = {
        type : 'EDIT_EXPENSE',
        id : -1,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})