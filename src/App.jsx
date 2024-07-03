import { cards } from './constants';
import { background } from './assets';

const App = () => {
	return (
		<div className="w-full h-full flex justify-center items-center flex-col">
			<h1 className="font-rockSalt text-4xl text-red-700">Memory Card Game</h1>
			<h2 className="font-playWrite text-2xl text-blue-300">Start the game</h2>
			<div className="w-1/2 justify-center items-center flex">
				<div className="grid grid-cols-4 gap-5">
					{cards.map((card, i) => (
						<div key={i} className="w-24">
							<img src={card.img} alt={`card-${i}`} />
							<img src={background} alt="background" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
