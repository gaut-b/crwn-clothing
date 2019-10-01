import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils.js';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
	return(

		<div className = 'header' >
			<Link className = 'logo-container' to='/'>
				<Logo className = 'logo'></Logo>
			</Link>
			<div className = 'options'>
				<Link className = 'option' to = '/shop' >SHOP</Link>
				<Link className = 'otpion' to = '/shop' >CONTACT</Link>
				<Link>
					{
						currentUser ?
						(<div className = 'option' onClick = { () => auth.signOut() }>SIGN OUT</div>)
						: <Link className = 'option' to = '/signin'>SIGN IN</Link>
					}
				</Link>
			</div>
		</div>

	);

}

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);