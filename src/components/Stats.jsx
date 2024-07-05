import BoardChooser from './BoardChooser';

const Stats = ({ turn, moves, restartGame, chooseBoard }) => {
	return (
		<div className="flex flex-col mx-20">
			<div className="flex flex-row justify-between">
				<div className="stats-container w-56 h-40">
					<h2 className="text-gray-200 font-playWrite text-2xl">Stats:</h2>

					<p className="text-gray-900 text-xl font-playWrite my-3">
						Turn: {turn > 0 ? turn : 'x'}
					</p>

					<p className="text-gray-900 text-xl font-playWrite mb-3">
						Moves: {moves > 0 ? moves : 'x'}
					</p>
				</div>
				<div className="stats-container w-36 h-20 self-end flex justify-center mx-0">
					<button onClick={restartGame} className="btn">
						Restart
					</button>
				</div>
			</div>
			<BoardChooser chooseBoard={chooseBoard} />
		</div>
	);
};

export default Stats;
