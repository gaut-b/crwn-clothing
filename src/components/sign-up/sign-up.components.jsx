import React, { useState } from 'react';
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

const SignUp = ({ signUpStart }) => {

	const [ userCredentials, setCredentials ] = useState(DEFAULT_STATE);

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async event => {
		
		event.preventDefault();
		if (password !== confirmPassword){
			alert('passwords don\'t match');
			return;
		} 

		signUpStart({ email, password, displayName });

	}

	const handleChange = event => {

		const { name, value } = event.target;
		setCredentials({ ...userCredentials, [name]: value});
		
	}

	return(
		<div className = 'sign-up'>
			<h2 className = 'title'>I don't have an account</h2>
			<span>Sign up with your email and password</span>
			<form className = 'sign-up-form' onSubmit = {handleSubmit}>
				<FormInput
					type = 'text'
					name = 'displayName'
					value = {displayName}
					onChange = {handleChange}
					label = 'Display Name'
					required
				/>
				<FormInput
					type = 'email'
					name = 'email'
					value = {email}
					onChange = {handleChange}
					label = 'Email'
					required
				/>
				<FormInput
					type = 'password'
					name = 'password'
					value = {password}
					onChange = {handleChange}
					label = 'Password'
					required
				/>
				<FormInput
					type = 'password'
					name = 'confirmPassword'
					value = {confirmPassword}
					onChange = {handleChange}
					label = 'confirmPassword'
					required
				/>
				<CustomButton type= 'submit'>Sign Up</CustomButton>
			</form>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({
	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);