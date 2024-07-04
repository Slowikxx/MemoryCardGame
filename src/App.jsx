import { useState } from 'react';
import { GameBoard } from './components';
import { cards } from './constants';

const App = () => {
	const [cardsDeck, setCardsDeck] = useState([]);

	// shuffling the cards and setting the state
	const shuffleCards = () => {
		const shuffledCards = [...cards].sort(() => Math.random() - 0.5);

		// adding a random id to each card
		shuffledCards.map((card) => ({ ...card, id: Math.random() }));

		setCardsDeck(shuffledCards);
	};
	return (
		<div className="w-full h-full flex justify-center items-center flex-col">
			<h1 className="font-rockSalt text-4xl text-red-700">Memory Card Game</h1>
			<button
				onClick={shuffleCards}
				className="font-playWrite bg-blue-300 text-xl w-32 h-10 rounded-2xl border-black border-2 text-white hover:text-black mt-5"
			>
				Start
			</button>
			<GameBoard cardsDeck={cardsDeck} />
		</div>
	);
};

export default App;
