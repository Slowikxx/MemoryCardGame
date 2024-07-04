import { useState } from 'react';
import { background } from '../assets';

const Card = ({ index, image }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div onClick={() => setIsFlipped(true)} key={index} className="w-24">
			{!isFlipped ? (
				<img src={background} alt="background" />
			) : (
				<img src={image} alt={`card-${index}`} />
			)}
		</div>
	);
};

export default Card;
