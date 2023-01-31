import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import "./Filter.module.css";



export const Filter = ({value, onChange}) => {
    const inputFilter = nanoid();
    return (
        <div>
            <label htmlFor={inputFilter}> Find contacts by Name</label>
            <input
                id={inputFilter}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}
