import { background } from '../assets';

const Card = ({ index, image, isFlipped, setCardsDeck, setChosenCard }) => {
	const flipCard = () => {
		setCardsDeck((prevCards) =>
			prevCards.map((card) =>
				card.id === index ? { ...card, flipped: true } : card
			)
		);
	};

	const handleClick = () => {
		flipCard();
		setChosenCard({ img: image, id: index, flipped: isFlipped });
	};

	return (
		<div key={index} className="w-24">
			{!isFlipped ? (
				<img onClick={handleClick} src={background} alt="background" />
			) : (
				<img src={image} alt={`card-${index}`} />
			)}
		</div>
	);
};

export default Card;
