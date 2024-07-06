import { useEffect, useState } from 'react';
import { GameBoard, Stats, BoardChooser, GameOver } from './components';
import { cards } from './data';

const App = () => {
	const [gameCards, setGameCards] = useState([]);
	const [cardsDeck, setCardsDeck] = useState([]);
	const [turn, setTurn] = useState(0);
	const [firstCard, setFirstCard] = useState(null);
	const [secondCard, setSecondCard] = useState(null);
	const [cardDisabled, setCardDisabled] = useState(false);
	const [moves, setMoves] = useState(0);
	const [isGameOver, setIsGameOver] = useState(false);
	const [activeTimer, setActiveTimer] = useState(false);
	const [secondsPassed, setSecondsPassed] = useState(0);

	// shuffling the cards and setting the state
	const shuffleCards = () => {
		const shuffledCards = [...gameCards, ...gameCards]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		setCardsDeck(shuffledCards);
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
		setTurn(1);
		shuffleCards();
		setMoves(0);
		setIsGameOver(false);
		setSecondsPassed(0);
		setActiveTimer(true);
	};

	// if all the cards are matched game is over
	const checkGameOver = () => {
		if (
			cardsDeck.length > 0 &&
			cardsDeck.every((card) => card.matched === true)
		) {
			setIsGameOver(true);
			setActiveTimer(false);
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

	// timer
	useEffect(() => {
		let interval = null;
		// when timer is activated count seconds
		if (activeTimer) {
			interval = setInterval(() => {
				setSecondsPassed((prevSeconds) => prevSeconds + 1);
			}, 1000);
		} else if (!activeTimer && secondsPassed !== 0) {
			clearInterval(interval);
		}

		return () => {
			clearInterval(interval);
		};
	}, [activeTimer, secondsPassed]);

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
						<Stats
							turn={turn}
							moves={moves}
							secondsPassed={secondsPassed}
							restartGame={restartGame}
						/>
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
				<GameOver
					moves={moves}
					secondsPassed={secondsPassed}
					restartGame={restartGame}
				/>
			)}
		</div>
	);
};

export default App;
