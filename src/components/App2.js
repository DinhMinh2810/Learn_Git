import React, { memo } from 'react';
import RandomColor from './RandomColor';
import RandomColor2 from './HOC';

const App2 = (props) => {
	console.log('props a', { ...props });
	const a = 1;
	return <div a={a}>App2</div>;
};

export default memo(RandomColor2(RandomColor(App2)));
