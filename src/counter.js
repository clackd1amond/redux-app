import React from 'react';

const Counter = ({ counter, inc, dec, rnd, rst }) => {
	return (
		<>
			<div className='counter-block'>
				<p>{counter}</p>
			</div>
			<div className='buttons-block'>
				<button onClick={inc} className='btn btn-inc'>
					<img alt='plus' src='/img/Plus.svg' />
				</button>
				<button onClick={dec} className='btn btn-dec'>
					<img alt='minus' src='/img/Minus.svg' />
				</button>
				<button onClick={rnd} className='btn btn-rnd'>
					<img alt='random' src='/img/Reset.svg' />
				</button>
				<button onClick={rst} className='btn btn-rst'>
					<img alt='reset' src='/img/Reset.svg' />
				</button>
			</div>
		</>
	);
};

export default Counter;
