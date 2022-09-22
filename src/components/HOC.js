import React from 'react';

const RandomColor2 = (ChildComponent) => {
	function getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	const color = getRandomColor();
	return (props) => (
		<div style={{ color }}>
			{console.log(props)}
			<h1>Random2</h1>
			<ChildComponent b={true} c={true} {...props} />
		</div>
	);
};

export default RandomColor2;
