import Card from './Card';

const GameBoard = ({
	cardsDeck,
	setChosenCard,
	firstCard,
	secondCard,
	cardDisabled,
	setMoves,
	boardSize,
}) => {
	const gridCols = boardSize === 8 ? 4 : boardSize === 10 ? 5 : 6;
	return (
		<div className="justify-center items-center flex">
			<div className={`grid grid-cols-${gridCols} gap-5`}>
				{cardsDeck.map((card) => (
					<Card
						key={card.id}
						card={card}
						isFlipped={
							card === firstCard || card === secondCard || card.matched
						}
						deck={cardsDeck}
						setChosenCard={setChosenCard}
						cardDisabled={cardDisabled}
						setMoves={setMoves}
					/>
				))}
			</div>
		</div>
	);
};

export default GameBoard;
