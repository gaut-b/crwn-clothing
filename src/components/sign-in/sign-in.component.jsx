import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';

const DEFAULT_STATE = {
	email: '',
	password: '',
}

class SignIn extends Component {
	constructor(props){
		super(props);
		this.state = DEFAULT_STATE;
	}

	handleSubmit = (event) => {

		this.setState(DEFAULT_STATE)
		event.preventDefault();

	}

	handleChange = (event) => {

		const { value, name } = event.target;

		this.setState({ [name]: value })
		
	}

	render(){

		const { email, password } = this.state;

		return(

			<div className = 'sign-in'>
				<h2> I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit = { this.handleSubmit } >
					<FormInput 
					  name = 'email' 
					  type = 'email'
					  value = { email }
					  handleChange = { this.handleChange }
					  label = 'email'
					  required 
					/>
					<FormInput 
					  name = 'password'
					  type = 'password'
					  label = 'password'
					  value = { password } 
					  input = 'this.sate.password'
					  handleChange = { this.handleChange } 
					  required 
					/>
					<div className = 'buttons'>
						<CustomButton type = 'submit'>Sign In</CustomButton>
						<CustomButton onClick = { signInWithGoogle } isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>

			</div>

		);
	}
}

export default SignIn;