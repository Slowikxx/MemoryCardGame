import { background } from '../assets';

const Card = ({ card, isFlipped, setChosenCard, cardDisabled, setMoves }) => {
	// when a card that is not disabled is clicked it is set to be the chosen card and a move is added
	const handleClick = () => {
		if (!cardDisabled) {
			setChosenCard(card);
			setMoves((prevMoves) => prevMoves + 1);
		}
	};

	return (
		<div
			key={card.id}
			className={`group [perspective:1000px] w-24 cursor-pointer ${
				!isFlipped && !cardDisabled && 'hover:border-4 hover:border-[#f50089]'
			}`}
		>
			<div
				className={`transition-all duration-300 [transform-style:preserve-3d] ${
					isFlipped ? '[transform:rotateY(180deg)]' : ''
				}`}
				onClick={handleClick}
			>
				{!isFlipped ? (
					<img
						src={background}
						alt="background"
						className="[backface-visibility:hidden]"
					/>
				) : (
					<img
						src={card.img}
						alt={`card-${card.id}`}
						className="[backface-visibility:hidden] [transform:rotateY(180deg)]"
					/>
				)}
			</div>
		</div>
	);
};

export default Card;
