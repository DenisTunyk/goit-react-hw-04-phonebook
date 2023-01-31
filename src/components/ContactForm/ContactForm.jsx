import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import { Component } from "react";
import "./ContactForm.module.css"

export class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    }

    loginInputName = nanoid();
    loginInputPhone = nanoid();

    handleChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({name: '', number: ''})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.loginInputName}> Name</label>
                <input
                    id={this.loginInputName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <label htmlFor={this.loginInputPhone}> Number </label>
                <input
                    id={this.loginInputPhone}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleChange}
                />
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
}