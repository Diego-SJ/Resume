import React, { Fragment } from 'react';
import Icon from '../icon';

// Styling
require('./index.scss');

const CardContact = ({ icon, title, description }) => {
	return (
		<Fragment>
			<div className='contact-card'>
				<div className='contact-card__head'>
					<Icon icon={icon} className='contact-card__icon' />
				</div>
				<div className='contact-card__wraper'>
					<h1 className='contact-card__title'>{title}</h1>
					<p className='contact-card__description'>{description}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default CardContact;
