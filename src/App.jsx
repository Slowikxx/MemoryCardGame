import { cards } from './constants';

const App = () => {
	return (
		<div className="w-full h-full flex justify-center items-center flex-col">
			<h1 className="font-rockSalt text-4xl text-red-700">Memory Card Game</h1>
			<h2 className="font-playWrite text-2xl text-blue-300">Start the game</h2>
			<div className="mt-5">
				{cards.map((card, i) => (
					<div key={i}>
						<img src={card.img} alt={`card-${i}`} className="w-1/4 h-1/4" />
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
