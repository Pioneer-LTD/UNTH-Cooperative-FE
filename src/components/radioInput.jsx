import {PropTypes} from 'prop-types'
const RadioInput = ({
	labelText,
	options,
	initialSelection,
	updatedSelection,
}) => {
	return (
		<div className="flex flex-col items-start">
			<label
				htmlFor=""
				className="text-sm mb-1">
				{labelText} <span className="reqired text-red-500 mx-1">*</span>
			</label>

			<div className="flex space-x-5">
				{options.map((option) => (
					<label
						className="flex space-x-1"
						key={option.value}>
						<input
							type="radio"
							value={option.value}
							checked={initialSelection === option.value}
							onChange={(e) => updatedSelection(e.target.value)}
							required
						/>
						<span>{option.label}</span>
					</label>
				))}
			</div>
		</div>
	);
};
RadioInput.propTypes = {
labelText: PropTypes.string.isRequired,
options: PropTypes,
initialSelection: PropTypes,
updatedSelection: PropTypes,
};

export default RadioInput;
