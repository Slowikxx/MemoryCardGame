import {
	flower1,
	flower2,
	palm,
	shell1,
	shell2,
	shell3,
	star1,
	star2,
	drink1,
	drink2,
	icecream1,
	icecream2,
	pineapple,
	watermelon1,
	watermelon2,
} from '../assets';

// for 4x4 game we need 8 pairs of cards
// for 4x5 we need 10 pairs of cards
// 5x5 game is not possible because one card will be left withouth a pair
// for a 5x6 game we need 15 pairs of cards

export const cards = [
	{ img: flower1, matched: false },
	{ img: flower2, matched: false },
	{ img: palm, matched: false },
	{ img: shell1, matched: false },
	{ img: shell2, matched: false },
	{ img: shell3, matched: false },
	{ img: star1, matched: false },
	{ img: star2, matched: false },
	{ img: drink1, matched: false },
	{ img: drink2, matched: false },
	{ img: icecream1, matched: false },
	{ img: icecream2, matched: false },
	{ img: pineapple, matched: false },
	{ img: watermelon1, matched: false },
	{ img: watermelon2, matched: false },
];
