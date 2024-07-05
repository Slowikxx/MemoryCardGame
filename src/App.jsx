import { useEffect, useState } from 'react';
import { GameBoard } from './components';
import { cards } from './data';

const App = () => {
	const [gameCards, setGameCards] = useState([]);
	const [cardsDeck, setCardsDeck] = useState([]);
	const [turn, setTurn] = useState(0);
	const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);
	const [cardDisabled, setCardDisabled] = useState(false);
	const [moves, setMoves] = useState(0);

	// shuffling the cards and setting the state
	const shuffleCards = () => {
		const shuffledCards = [...gameCards, ...gameCards]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCardsDeck(shuffledCards);
		setTurn(1);
	};

	// setting the chosen cards
	const setChosenCard = (card) => {
		if (firstCard) {
			if (firstCard.id !== card.id) {
				setSecondCard(card);
			} else {
				setMoves((prevMoves) => prevMoves - 1);
			}
		} else {
			setFirstCard(card);
		}
	};

	// next turn, resets the chosen cards and making cards clickable again
	const resetTurn = () => {
		setFirstCard(null);
		setSecondCard(null);
		setTurn((prevTurn) => prevTurn + 1);
		setCardDisabled(false);
	};

	// restarts the whole game shuffling cards randomly
	const restartGame = () => {
		setFirstCard(null);
		setSecondCard(null);
		setTurn(0);
		shuffleCards();
		setMoves(0);
	};

	// if all the cards are matched game is over
	const checkGameOver = () => {
		if (
			cardsDeck.length > 0 &&
			cardsDeck.every((card) => card.matched === true)
		) {
			alert('Game Won');
		}
	};

	const chooseBoard = (size) => {
		switch (size) {
			case '4x4':
				setGameCards(cards.slice(0, 8));
				break;
			case '4x5':
				setGameCards(cards.slice(0, 10));
				break;
			case '5x6':
				setGameCards(cards);
				break;
			default:
				setGameCards(cards.slice(0, 8));
		}
	};

	useEffect(() => {
		// if both cards are chosen check if they match
		if (firstCard && secondCard) {
			setCardDisabled(true);
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
				resetTurn();
			} else {
				// next turn after 1s
				setTimeout(() => resetTurn(), 1000);
			}
		}
	}, [firstCard, secondCard]);

	// check if game is over after every turn
	useEffect(() => {
		checkGameOver();
	}, [cardsDeck]);

	// when app loads shuffle the cards starting the game
	useEffect(() => {
		shuffleCards();
	}, [gameCards]);

	return (
		<div className="w-full min-h-screen max-h-full flex flex-col bg-gradient-to-b from-[#355c7d] to-[#c06c84] py-5">
			<h1 className="font-rockSalt text-4xl text-white self-center">
				Memory Card Game
			</h1>
			<div className="flex flex-row mt-5">
				<div className="flex flex-col">
					<div className="w-[400px] h-[200px] bg-gray-500 border-2 border-black mx-20 flex flex-col p-3">
						<h2 className="text-gray-200 font-playWrite text-2xl">Stats:</h2>

						<p className="text-gray-900 text-xl font-playWrite my-3">
							Turn: {turn > 0 ? turn : 'x'}
						</p>

						<p className="text-gray-900 text-xl font-playWrite mb-3">
							Moves: {moves > 0 ? moves : 'x'}
						</p>

						<button
							onClick={restartGame}
							className="font-playWrite bg-blue-300 text-xl w-28 h-10 rounded-2xl border-black border-2 text-white hover:text-black"
						>
							Restart
						</button>
					</div>
					<div className="w-[400px] h-[120px] bg-gray-500 border-2 border-black mx-20 flex flex-col p-3 mt-5">
						<h2 className="text-gray-200 font-playWrite text-2xl mb-5">
							Choose Board:
						</h2>
						<div className="flex flex-row justify-between">
							<button
								onClick={() => chooseBoard('4x4')}
								className="font-playWrite bg-blue-300 text-xl w-28 h-10 rounded-2xl border-black border-2 text-white hover:text-black"
							>
								4x4
							</button>
							<button
								onClick={() => chooseBoard('4x5')}
								className="font-playWrite bg-blue-300 text-xl w-28 h-10 rounded-2xl border-black border-2 text-white hover:text-black"
							>
								4x5
							</button>
							<button
								onClick={() => chooseBoard('5x6')}
								className="font-playWrite bg-blue-300 text-xl w-28 h-10 rounded-2xl border-black border-2 text-white hover:text-black"
							>
								5x6
							</button>
						</div>
					</div>
				</div>
				<GameBoard
					cardsDeck={cardsDeck}
					setChosenCard={setChosenCard}
					firstCard={firstCard}
					secondCard={secondCard}
					cardDisabled={cardDisabled}
					setMoves={setMoves}
					boardSize={gameCards.length}
				/>
			</div>
		</div>
	);
};

export default App;
