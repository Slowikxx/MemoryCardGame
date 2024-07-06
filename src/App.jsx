import { useEffect, useState } from 'react';
import { GameBoard, Stats, BoardChooser } from './components';
import { cards } from './data';

const App = () => {
	const [gameCards, setGameCards] = useState([]);
	const [cardsDeck, setCardsDeck] = useState([]);
	const [turn, setTurn] = useState(0);
	const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);
	const [cardDisabled, setCardDisabled] = useState(false);
	const [moves, setMoves] = useState(0);
	const [isGameOver, setIsGameOver] = useState(true);

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
		setIsGameOver(false);
	};

	// if all the cards are matched game is over
	const checkGameOver = () => {
		if (
			cardsDeck.length > 0 &&
			cardsDeck.every((card) => card.matched === true)
		) {
			setIsGameOver(true);
		}
	};

	const chooseBoard = (size) => {
		switch (size) {
			case '4x4':
				setGameCards(cards.slice(0, 8));
				restartGame();
				break;
			case '4x5':
				setGameCards(cards.slice(0, 10));
				restartGame();
				break;
			case '5x6':
				setGameCards(cards);
				restartGame();
				break;
			default:
				setGameCards(cards.slice(0, 8));
				restartGame();
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
			{!isGameOver ? (
				<div className="flex flex-row mt-5">
					<div className="flex flex-col mx-20">
						<Stats turn={turn} moves={moves} restartGame={restartGame} />
						<BoardChooser chooseBoard={chooseBoard} />
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
			) : (
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
							<span className="text-blue-300">time</span> time!
						</p>
						<p className="text-xl font-playWrite text-gray-300">
							Would you like to{' '}
							<span className="text-blue-300">play again?</span>
						</p>
					</div>

					<button onClick={restartGame} className="btn w-36 mt-8 self-center">
						New Game
					</button>
				</div>
			)}
		</div>
	);
};

export default App;
