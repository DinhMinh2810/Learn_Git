import React, { Suspense, lazy, Fragment, useRef } from 'react';
import App1 from './components/App1';
import App2 from './components/App2';
import _COMMON from './components/_common';
import Func from './components/Func';
import App3 from './components/App3';
const OtherComponent = React.lazy(() => import('./components/App1'));

function App() {
	const minRef = useRef(null);

	const users = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Johns' },
		{ id: 3, name: 'Johna' },
	];

	const props = { firstName: 'Ben', lastName: 'Hector' };

	return (
		<Suspense
			fallback={
				<div style={{ color: 'red' }}>
					<h1>Loading...Loading...Loading...Loading...Loading...</h1>
				</div>
			}
		>
			<button
				onClick={() => {
					console.log('ref', minRef);
				}}
			>
				ok
			</button>
			{users.map((user) => (
				<Fragment key={user.id}>
					<ul>
						<li>{user.name}</li>
					</ul>
				</Fragment>
			))}
			<OtherComponent minRef={minRef} />
			<App2 />
			<App3 firstName={'Ben'} lastName={'Hector'} />
		</Suspense>
	);
}

export default App;
