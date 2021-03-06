import * as ActionTypes from './actiontypes';

// this will our reducer function, it will receive current state and action,
// which is pure function
// i cannot modify the state in the reduce , i do the immutable change & 
// return the updated version of state from the reducer
// initialState contain four properties dishes,commets,promotions,leaders
// es6 way of defining a function where you set the default value of paramter
// when the store first time call reduce ,state is underfined so as to avoid that
// we set the default value of stae to initalstate

// when you implement the reducer function you take state and action
// as two parameters
// if state is not defined you give the initial value of state 
// as dishes and retur them
// export const Leaders = (state = LEADERS, action) => {
// 	switch(action.type) {
// 		default:
// 			return state;
// 	}
// }


export const Leaders = (state = {
		isLoading: true,
		errMess: null,
		leaders: []
}, action) => {
	switch(action.type) {

		case ActionTypes.ADD_LEADERS:
			return {...state, isLoading: false, errMess: null, leaders: action.payload };

		case ActionTypes.LEADERS_LOADING:
			return {...state, isLoading: true, errMess: null, leaders: []};

		case ActionTypes.LEADERS_FAILED:
			return {...state, isLoading: false, errMess: action.payload, leaders: []};

		default:
			return state;
	}
}


