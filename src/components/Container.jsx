import PropTypes from 'prop-types'

export default function Container({ children, className }) {
  return <div className={`max-w-4xl m-auto px-2 sm:px-6 ${className}`}>{children}</div>
}

Container.propTypes = {
  chidren: PropTypes.node,
  className: PropTypes.string
}

Container.defaultProps = {
  children: '',
  className: ''
}
