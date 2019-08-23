import React from 'react';
import Directory from '../../components/directory/directory.component.jsx'
import './homepage.styles.scss';

const HomePage = ({ history }) => {
	return(
		<div className = 'HomePage'>
			<Directory history = {history} />
		</div>
	);
}

export default HomePage;