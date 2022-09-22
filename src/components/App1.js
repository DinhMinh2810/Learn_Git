import React from 'react';
import { useState, useEffect, memo, forwardRef } from 'react';

const App1 = (props, ref) => {
	return (
		<>
			<h1 ref={ref}>hihi</h1>
		</>
	);
};

export default forwardRef(App1);
