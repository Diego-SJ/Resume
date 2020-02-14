import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import SlideMenu from '../layout/SlideMenu';
import Icon from '../icon';
import { CONTACT, LINKEDIN, GITHUB, HOME } from '../../routes/routes';

// Style
require('./index.scss');
const videoParticles = require('../../img/particles.mp4');

const Home = () => {
	return (
		<Fragment>
			<SlideMenu currentPage={HOME} />
			<div className='landing-home'>
				<div className='bg-video'>
					<video className='bg-video__content' autoPlay muted loop>
						<source src={videoParticles} type='video/mp4' />
						<source src={videoParticles} type='video/webm' />
						Your browser is not supported!
					</video>
				</div>
				<div className='welcome-message'>
					<h1 className='primary'>
						<span>Hi! I am </span> Juan Diego Salas Jiménez
					</h1>
					<div className='welcome-message__secondary'>
						<p className='paragraph'>
							Join the IT area of a company to expand my knowledge about hardware and
							software. Contribute positively with the IT area to improve processes
							within the company.
						</p>
					</div>
					<div className='welcome-message__social'>
						<ul className='social'>
							<li className='social-item'>
								<Link to={CONTACT} className='social-item__content'>
									<Icon icon='at-sign' className='social-item__icon' />
								</Link>
							</li>
							<li className='social-item'>
								<Link to={CONTACT} className='social-item__content'>
									<Icon icon='phone' className='social-item__icon' />
								</Link>
							</li>
							<li className='social-item'>
								<a
									href={LINKEDIN}
									className='social-item__content'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icon icon='linkedin' className='social-item__icon' />
								</a>
							</li>
							<li className='social-item'>
								<a
									href={GITHUB}
									className='social-item__content'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icon icon='github' className='social-item__icon' />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
