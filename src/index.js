import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';

const store = createStore(reducer);
const { dispatch } = store;

// const bindActionCreator =
// 	(creator, dispatch) =>
// 	(...args) => {
// 		dispatch(creator(...args));
// 	};

const { inc, dec, rst, rnd } = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);
// const rstDispatch = bindActionCreators(rst, dispatch);

// document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('rst').addEventListener('click', rst);
// document.getElementById('rnd').addEventListener('click', () => {
// 	const value = Math.floor(Math.random() * 10);
// 	rnd(value);
// });

const update = () => {
	// document.getElementById('counter').textContent = store.getState();
	ReactDOM.render(
		<Counter
			counter={store.getState()}
			inc={inc}
			dec={dec}
			rst={rst}
			rnd={() => {
				const value = Math.floor(Math.random() * 10);
				rnd(value);
			}}
		/>,
		document.getElementById('root')
	);
};
update();

store.subscribe(update);

// store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });
// store.dispatch({ type: 'INC' });
