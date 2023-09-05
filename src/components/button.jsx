import PropTypes from "prop-types";

const Button = ({ value, onClick, type }) => {
	return (
		<div>
			<button
				className="bg-dark-primary-green py-3 px-4 w-full rounded text-white"
				onClick={onClick}
				type={type}>
				{value}
			</button>
		</div>
	);
};
Button.propTypes = {
	value: PropTypes.string.isRequired,
	onClick: PropTypes,
	type: PropTypes,
};

export default Button;
