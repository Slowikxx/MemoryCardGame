import { cards } from '../constants';
import Card from './Card';

const GameBoard = () => {
	return (
		<div className="w-1/2 justify-center items-center flex">
			<div className="grid grid-cols-4 gap-5">
				{cards.map((card, i) => (
					<Card key={i} index={i} image={card.img} />
				))}
			</div>
		</div>
	);
};

export default GameBoard;
