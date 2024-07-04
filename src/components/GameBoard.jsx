import Card from './Card';

const GameBoard = ({ cardsDeck, setChosenCard, firstCard, secondCard }) => {
	return (
		<div className="w-1/2 justify-center items-center flex">
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
					/>
				))}
			</div>
		</div>
	);
};

export default GameBoard;
