import Card from './Card';

const GameBoard = ({ cardsDeck, setCardsDeck, setChosenCard }) => {
	return (
		<div className="w-1/2 justify-center items-center flex">
			<div className="grid grid-cols-4 gap-5">
				{cardsDeck.map((card) => (
					<Card
						key={card.id}
						index={card.id}
						image={card.img}
						isFlipped={card.flipped}
						deck={cardsDeck}
						setCardsDeck={setCardsDeck}
						setChosenCard={setChosenCard}
					/>
				))}
			</div>
		</div>
	);
};

export default GameBoard;
