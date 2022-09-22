import React from 'react';

const Func = (a, b) => {
	React.useEffect(() => {
		setTimeout(() => {
			console.log('setTimeOut ne');
		}, 3000);
	}, []);

	const c = a + b;
	return c;
};

export default Func;
