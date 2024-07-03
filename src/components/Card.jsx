import { background } from '../assets';

const Card = ({ index, image }) => {
	return (
		<div key={index} className="w-24">
			<img src={image} alt={`card-${index}`} />
			<img src={background} alt="background" />
		</div>
	);
};

export default Card;
