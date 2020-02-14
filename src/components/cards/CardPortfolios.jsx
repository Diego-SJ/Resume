import React, { Fragment } from 'react';
import Icon from '../icon';
import useModal from 'use-react-modal';

// Styling
require('./index.scss');

const CardPortfolios = ({ image = null, title, description, link = null }) => {
	const { isOpen, openModal, closeModal, Modal } = useModal({
		background: 'rgba(0, 0, 0, 0.7)',
		closeOnOutsideClick: true,
		closeOnEsc: true,
	});

	return (
		<Fragment>
			<div className='portfolios-card'>
				<div className='portfolios-card__head'>
					<img
						src={image}
						alt='cover portfolios'
						className='portfolios-card__image'
					/>
					<div className='portfolios-card__hide'>
						{image != null ? (
							<button onClick={openModal} className='portfolios-card__options'>
								<Icon icon='eye' className='portfolios-card__options-icon' />
							</button>
						) : (
							''
						)}
						{isOpen && (
							<Modal className='modal'>
								<div className='modal__close'>
									<button onClick={closeModal} className='modal__btn'>
										&times;
									</button>
								</div>
								<img src={image} alt={title} className='modal__image' />
							</Modal>
						)}
						{link != null ? (
							<a
								href={link}
								target='_blank'
								without
								rel='noopener noreferrer'
								className='portfolios-card__options'
							>
								<Icon icon='external-link' className='portfolios-card__options-icon' />
							</a>
						) : (
							''
						)}
					</div>
				</div>
				<div className='portfolios-card__wraper'>
					<a
						href={link}
						target='_blank'
						without
						rel='noopener noreferrer'
						className='portfolios-card__title'
					>
						{title}
					</a>
					<p className='portfolios-card__description'>{description}</p>
				</div>
			</div>
		</Fragment>
	);
};

export default CardPortfolios;
