import { useEffect, useState } from 'react';
import { GameBoard } from './components';
import { cards } from './data';

const App = () => {
	const [cardsDeck, setCardsDeck] = useState([]);
	const [turn, setTurn] = useState(1);
	const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);

	// shuffling the cards and setting the state
	const shuffleCards = () => {
		const shuffledCards = [...cards]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCardsDeck(shuffledCards);
		setTurn(1);
	};

	const setChosenCard = (card) => {
		firstCard ? setSecondCard(card) : setFirstCard(card);
	};

	const resetTurn = () => {
		setFirstCard(null);
		setSecondCard(null);
		setTurn((prevTurn) => prevTurn + 1);
	};

	useEffect(() => {
		// if both cards are chosen check if they match
		if (firstCard && secondCard) {
			// if cards match set their matched state to true
			if (firstCard.img === secondCard.img) {
				setCardsDeck((prevCards) =>
					prevCards.map((card) => {
						if (card.img === firstCard.img) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					})
				);
				console.log(cardsDeck);
				resetTurn();
			} else {
				// next turn after 1s
				setTimeout(() => resetTurn(), 1000);
			}
		}
	}, [firstCard, secondCard]);

	return (
		<div className="w-full h-full flex justify-center items-center flex-col">
			<h1 className="font-rockSalt text-4xl text-red-700">Memory Card Game</h1>
			<p>Turn {turn}</p>
			<button
				onClick={shuffleCards}
				className="font-playWrite bg-blue-300 text-xl w-32 h-10 rounded-2xl border-black border-2 text-white hover:text-black mt-5"
			>
				Start
			</button>
			<GameBoard
				cardsDeck={cardsDeck}
				setChosenCard={setChosenCard}
				firstCard={firstCard}
				secondCard={secondCard}
			/>
		</div>
	);
};

export default App;
