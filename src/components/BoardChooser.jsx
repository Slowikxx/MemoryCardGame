const BoardChooser = ({ chooseBoard }) => {
	return (
		<div className="stats-container mt-5 w-96">
			<h2 className="text-gray-200 font-playWrite text-2xl mb-5">
				Choose Board:
			</h2>
			<div className="flex flex-row justify-between">
				<button onClick={() => chooseBoard('4x4')} className="btn">
					4x4
				</button>
				<button onClick={() => chooseBoard('4x5')} className="btn">
					4x5
				</button>
				<button onClick={() => chooseBoard('5x6')} className="btn">
					5x6
				</button>
			</div>
		</div>
	);
};

export default BoardChooser;
