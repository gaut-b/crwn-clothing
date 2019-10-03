import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors.js';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
	return(
		<div className = 'collections-overview'>
			{collections.map( ({id, ...otherCollectionProps}) => {
				return(
					<CollectionPreview key = {id} {...otherCollectionProps} />
				)
			})}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
