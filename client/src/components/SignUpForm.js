import React, { Component } from 'react'
import { singUp } from './UserMethods'
import { Link } from 'react-router-dom'
import StyleSheet from './StyleSheet.css';
import logo from './Logo.png';
import Axios from 'axios';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        //send values to DB
            singUp(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <>
            <img src={logo} alt='Logo' className='logo'></img>
        <div className="form">
            <form onSubmit={this.handleSubmit}>
            <div >
                <label id="nmSign">Name</label>
<br></br>
                <input type="text" id="nameSign"  placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
                <label id="emSing">E-Mail Address</label>
<br></br>
                <input type="email" id="emailSign" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div>
                <label id="pSign">Password</label>
<br></br>
                <input type="password" id="passwordSign" placeholder="Enter your password" name="password" autoComplete="off" value={this.state.password} onChange={this.handleChange} />
            </div>
<br></br>
            <div className="FormField">
                <button id="signBttn">Sign Up</button> I'm already member <Link to="/login">Login</Link> {/*TODO: send me to the log in */}
            </div>
            </form>
        </div>
        </>
        );
    }
}

export default SignUpForm;