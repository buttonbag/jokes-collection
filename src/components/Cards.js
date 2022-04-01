export default function Cards(props) {
	return (
		<div className="card">
			{props.type === 'single' && (
				<p className="card--joke">
					<span className="card--label">Joke:</span>
					{props.joke}
				</p>
			)}
			{props.setup && (
				<p className="card--setup">
					<span className="card--label">Setup:</span>
					{props.setup}
				</p>
			)}
			{props.punchline && (
				<p className="card--punchline">
					<span className="card--label">Punchline:</span>
					{props.punchline}
				</p>
			)}
		</div>
	);
}

// <div className="card--badge">nsfw</div>
