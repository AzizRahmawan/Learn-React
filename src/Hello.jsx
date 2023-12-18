import PropTypes from 'prop-types';

export function Hello (props){
    const className = props.className.split(' ')
    className.push('bg-secondary')
    return <h1 className={className.join(' ')}>Hello {props.name}!</h1>
}
Hello.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};