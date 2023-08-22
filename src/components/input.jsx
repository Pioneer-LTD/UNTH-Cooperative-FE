
import PropTypes from "prop-types";

const Input = ({type,label,placeHolder}) => {
  return (
    <div className="flex flex-col text-start">
      <label htmlFor="" className='text-sm mb-1'>{label + '*'}</label>
      <input
        type={type}
        placeholder={placeHolder}
        className="border border-slate-400 outline-none rounded p-2 mb-2"
      />
    </div>
  );
}


Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
};


export default Input