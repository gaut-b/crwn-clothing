import React, { Component } from 'react';
import { connect } from 'react-redux';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
const DEFAULT_STATE = {
	email: '',
	password: '',
}

class SignIn extends Component {
	constructor(props){
		super(props);
		this.state = DEFAULT_STATE;
	}

	handleSubmit = async (event) => {
		
		event.preventDefault();
		const { email, password } = this.state;
		const { emailSignInStart } = this.props;

		emailSignInStart(email, password);

	}

	handleChange = (event) => {

		const { value, name } = event.target;

		this.setState({ [name]: value })
		
	}

	render(){

		const { email, password } = this.state;
		const  { googleSignInStart } = this.props;

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
					  input = { this.state.password }
					  handleChange = { this.handleChange } 
					  required 
					/>
					<div className = 'buttons'>
						<CustomButton type = 'submit'>Sign In</CustomButton>
						<CustomButton 
							type = 'button' 
							onClick = { googleSignInStart } 
							isGoogleSignIn
						>
							Sign in with Google
						</CustomButton>
					</div>
				</form>

			</div>

		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);