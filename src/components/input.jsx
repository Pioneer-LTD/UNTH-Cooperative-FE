import PropTypes from "prop-types";

const Input = ({ type, label, placeHolder, onChange, value }) => {
	return (
		<div className="flex flex-col text-start">
			<label
				htmlFor=""
				className="text-sm mb-1">
				{label}
				<span className="reqired text-red-500 mx-1">*</span>
			</label>
			<input
				value={value}
				type={type}
				placeholder={placeHolder}
				onChange={onChange}
				className="border border-slate-400 outline-none rounded p-2 mb-2"
			/>
		</div>
	);
};

Input.propTypes = {
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeHolder: PropTypes.string.isRequired,
  onChange: PropTypes,
  value: PropTypes
};

export default Input;
