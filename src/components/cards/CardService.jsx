import React, { Fragment } from 'react';
import Icon from '../icon';

// Styling
require('./index.scss');

const CardService = ({ icon, title, description }) => {
	return (
		<Fragment>
			<div className='service-card'>
				<Icon icon={icon} className='service-card__icon' />
				<h1 className='service-card__title'>{title}</h1>
				<p className='service-card__description'>{description}</p>
			</div>
		</Fragment>
	);
};

export default CardService;
