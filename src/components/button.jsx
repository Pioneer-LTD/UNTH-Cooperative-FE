
import PropTypes from 'prop-types'

const Button = ({value}) => {
  return (
    <div>
        <button className='bg-dark-primary-green py-3 w-full rounded text-white'>{value}</button>
    </div>
  )
}
Button.propTypes = {
  value:PropTypes.string.isRequired,
};

export default Button