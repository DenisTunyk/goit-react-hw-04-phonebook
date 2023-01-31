import PropTypes from 'prop-types';
import "./ContactList.module.css";

export const ContactList = ({ options, onDelete } ) => {
    return (
        <ul>
           {options.map(({id, name,number}) => (
               <li key={id}>
                   
                    <span >{name}:</span>
                    <span > {number}</span>
                    <button onClick={() => onDelete(id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string
        })
    )
}