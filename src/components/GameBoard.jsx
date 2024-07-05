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
	const gridCols =
		boardSize === 8
			? 'grid-cols-4'
			: boardSize === 10
			? 'grid-cols-5'
			: 'grid-cols-6';
	return (
		<div className="justify-center items-center flex">
			<div className={`grid ${gridCols} gap-5`}>
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
