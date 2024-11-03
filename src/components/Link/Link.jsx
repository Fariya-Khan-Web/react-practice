import PropTypes from 'prop-types';

const Link = ({route}) => {
    return(
        <li className="pr-10 md:px-6 pl-1 rounded hover:bg-rose-400">{route.name}</li>
    )
}

Link.propTypes = {
    route: PropTypes.object
}

export default Link 