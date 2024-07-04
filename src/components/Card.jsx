import { background } from '../assets';

const Card = ({ card, isFlipped, setChosenCard }) => {
	const handleClick = () => {
		setChosenCard(card);
	};

	return (
		<div key={card.id} className="w-24">
			{!isFlipped ? (
				<img onClick={handleClick} src={background} alt="background" />
			) : (
				<img src={card.img} alt={`card-${card.id}`} />
			)}
		</div>
	);
};

export default Card;
