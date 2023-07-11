import {Component} from "react";
import PropTypes from "prop-types";
export class Forms extends Component {

    state = {
        email: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const target = event.currentTarget
        const login = target.elements.login.value
        const password = target.elements.password.value

        console.log({login, password})
    }

    handleChange = event => {
        const email = event.target.value;

        this.setState({
            email
        })
    }
    render() {

        const {email} = this.state;

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='login'/>
                    <input type='text' name='password'/>
                    <input type='text' name='email' value={email} onChange={this.handleChange}/>
                    <button type='submit'>
                        Submit
                    </button>
                </form>
            </>
        )
    }
}

Forms.propTypes = {
    onSubmit: PropTypes.func
}