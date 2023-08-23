import PropTypes from "prop-types";

const Dropdown = ({ label, onChange, value, options }) => {
	return (
		<div className="flex flex-col text-start">
			<label
				htmlFor=""
				className="text-sm mb-1">
				{label}
				<span className="reqired text-red-500 mx-1">*</span>
			</label>

			<select
				name="departmentUnit"
				id="departmentUnit"
				className="border border-slate-400 outline-none rounded p-2 mb-2"
				onChange={onChange}
				value={value}>
				<option
					className="text-gray-500"
					value=""
					disabled>
					Select {label}
				</option>
				{options.map((option, index) => (
					<option
						key={index}
						value={option}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes,
  value: PropTypes,
  options: PropTypes,
};

export default Dropdown;
