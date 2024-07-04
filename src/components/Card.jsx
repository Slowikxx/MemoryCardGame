import { background } from '../assets';

const Card = ({ index, image, isFlipped, setCardsDeck }) => {
	const flipCard = () => {
		setCardsDeck((prevCards) =>
			prevCards.map((card) =>
				card.id === index ? { ...card, flipped: true } : card
			)
		);
	};

	return (
		<div key={index} className="w-24">
			{!isFlipped ? (
				<img onClick={flipCard} src={background} alt="background" />
			) : (
				<img src={image} alt={`card-${index}`} />
			)}
		</div>
	);
};

export default Card;
