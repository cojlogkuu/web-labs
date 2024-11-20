import './intInput.scss';

const IntInput = ({value, setValue, min, max}) => {
	return (
			<div className="intInput">
				<button
						className="decrease"
						onClick={() => {
							setValue(prev => prev > min ? prev - 1 : min);
						}}
				>-</button>
				<input
						type="number"
						value={value}
						min={`${min}`}
						max={`${max}`}
						onChange={(e) => {
							const input = e.target.value;
							const intValue = parseInt(input, 10);

							if (input === '') {
								setValue(min); // Reset to 0 if input is empty
							} else if (!isNaN(intValue) && intValue >= min && intValue <= max) {
								setValue(intValue);
							}
						}}
				/>
				<button
						className="increase"
						onClick={() => {
							setValue(prev => prev < max ? prev + 1 : max);
						}}
				>+</button>
			</div>
	);
};

export default IntInput;