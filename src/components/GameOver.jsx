const GameOver = ({ moves, secondsPassed, restartGame }) => {
	return (
		<div className="stats-container w-1/2 h-80 self-center mt-20 p-5">
			<h1 className="font-rockSalt text-4xl text-pink-400 self-center">
				Game Won!
			</h1>
			<p className="mt-4 self-center text-2xl font-playWrite text-gray-300">
				Congratulations!
			</p>
			<div className="mt-10">
				<p className="mb-5 text-xl font-playWrite text-gray-300">
					You have beaten the game in{' '}
					<span className="text-blue-300">{moves}</span> moves and{' '}
					{/* TODO:count game time */}
					<span className="text-blue-300">{secondsPassed}</span> seconds!
				</p>
				<p className="text-xl font-playWrite text-gray-300">
					Would you like to <span className="text-blue-300">play again?</span>
				</p>
			</div>

			<button onClick={restartGame} className="btn w-36 mt-8 self-center">
				New Game
			</button>
		</div>
	);
};

export default GameOver;
