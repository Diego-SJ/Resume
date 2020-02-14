import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../icon';

// Routing
import { HOME, ABOUT, RESUME, PORTFOLIOS, CONTACT } from '../../routes/routes';

// Style
require('./index.scss');
const photo = require('../../img/jdsj.png');

const SlideMenu = ({ currentPage = 'home' }) => {
	const [Visibility, setVisibility] = useState({
		visibility: null,
	});

	const { visibility } = Visibility;

	useEffect(() => {
		setVisibility({ visibility: null });
	}, []);

	const changeVisibility = () => {
		console.log('click siedbar');
		if (visibility) {
			setVisibility({
				visibility: false,
			});
		} else {
			setVisibility({
				visibility: true,
			});
		}
	};

	return (
		<Fragment>
			<nav className={`sidebar ${visibility ? 'show' : ''}`}>
				<div className='btn-show-menu' onClick={() => changeVisibility()}>
					<button type='button'>
						<Icon icon='align-justify' className='icon' />
					</button>
				</div>
				<div className='header'>
					<Link to={HOME} className='header__user'>
						<img
							src={photo}
							alt='Juan Diego Salas Jimenez'
							className='header__photo'
						/>
					</Link>
				</div>
				<ul className='side-bar'>
					<li
						className={`side-bar__item  ${
							currentPage === HOME ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={HOME} className='side-bar__link'>
							<Icon icon='home' className='side-bar__icon' />
							<span>HOME</span>
						</Link>
					</li>
					<li
						className={`side-bar__item  ${
							currentPage === ABOUT ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={ABOUT} className='side-bar__link'>
							<Icon icon='info' className='side-bar__icon' />
							<span>ABOUT</span>
						</Link>
					</li>
					<li
						className={`side-bar__item  ${
							currentPage === RESUME ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={RESUME} className='side-bar__link'>
							<Icon icon='book' className='side-bar__icon' />
							<span>RESUME</span>
						</Link>
					</li>
					<li
						className={`side-bar__item  ${
							currentPage === PORTFOLIOS ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={PORTFOLIOS} className='side-bar__link'>
							<Icon icon='folder' className='side-bar__icon' />
							<span>PORTFOLIO</span>
						</Link>
					</li>
					<li
						className={`side-bar__item  ${
							currentPage === CONTACT ? 'side-bar__item-active' : ''
						}`}
					>
						<Link to={CONTACT} className='side-bar__link'>
							<Icon icon='phone' className='side-bar__icon' />
							<span>CONTACT</span>
						</Link>
					</li>
				</ul>
				<div className='legal'>&copy; 2020 by Juan Diego Salas Jimenez</div>
			</nav>
		</Fragment>
	);
};

export default SlideMenu;
