import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { signUpStart } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

const DEFAULT_STATE = {
	displayName: '',
	email : '',
	password: '',
	confirmPassword: '',
}

class SignUp extends React.Component {
	constructor(props){
		super(props);
		this.state = DEFAULT_STATE;
	}


	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword} = this.state
		const { signUpStart } = this.props;

		if (password !== confirmPassword){
			alert('passwords don\'t match');
			return;
		} 

		signUpStart({ email, password, displayName });

	}

	handleChange = event => {

		const { name, value } = event.target;
		this.setState({ [name]: value});
		
	}


	render(){

		const { displayName, email, password, confirmPassword} = this.state

		return(
			<div className = 'sign-up'>
				<h2 className = 'title'>I don't have an account</h2>
				<span>Sign up with your email and password</span>
				<form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
					<FormInput
						type = 'text'
						name = 'displayName'
						value = {displayName}
						onChange = {this.handleChange}
						label = 'Display Name'
						required
					/>
					<FormInput
						type = 'email'
						name = 'email'
						value = {email}
						onChange = {this.handleChange}
						label = 'Email'
						required
					/>
					<FormInput
						type = 'password'
						name = 'password'
						value = {password}
						onChange = {this.handleChange}
						label = 'Password'
						required
					/>
					<FormInput
						type = 'password'
						name = 'confirmPassword'
						value = {confirmPassword}
						onChange = {this.handleChange}
						label = 'confirmPassword'
						required
					/>
					<CustomButton type= 'submit'>Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);