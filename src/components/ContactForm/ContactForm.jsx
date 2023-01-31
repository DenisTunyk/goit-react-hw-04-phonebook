import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import "./ContactForm.module.css";
import { useState } from 'react';


export const ContactForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const loginInputName = nanoid();
    const loginInputPhone = nanoid();

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                break;        
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit(name, number)
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
            <form onSubmit={handleSubmit}>
                <label htmlFor={loginInputName}> Name</label>
                <input
                    id={loginInputName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
                <label htmlFor={loginInputPhone}> Number </label>
                <input
                    id={loginInputPhone}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
                <button type="submit">Add contact</button>
            </form>
    )
}


ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}