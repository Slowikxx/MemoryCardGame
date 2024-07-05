import Card from './Card';

const GameBoard = ({
	cardsDeck,
	setChosenCard,
	firstCard,
	secondCard,
	cardDisabled,
}) => {
	return (
		<div className="justify-center items-center flex">
			<div className="grid grid-cols-4 gap-5">
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
					/>
				))}
			</div>
		</div>
	);
};

export default GameBoard;
