import React from 'react';
import './App.scss';
import Cards from './components/Cards';
import Header from './components/Header';

function App() {
	const [jokesData, setJokesData] = React.useState([]);

	React.useEffect(() => {
		fetch('https://v2.jokeapi.dev/joke/Any?amount=10&blacklistFlags=racist')
			.then((res) => res.json())
			.then((data) => setJokesData(data.jokes));
	}, []);
	console.log(jokesData);

	const jokes = jokesData.map((joke) => {
		return (
			<Cards
				setup={joke.setup}
				punchline={joke.delivery}
				type={joke.type}
				joke={joke.joke}
			/>
		);
	});

	return (
		<div className="main">
			<Header />
			{jokes}
		</div>
	);
}

export default App;
