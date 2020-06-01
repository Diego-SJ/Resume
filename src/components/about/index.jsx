import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import { ABOUT } from '../../routes/routes';
import SlideMenu from '../layout/SlideMenu';
import CardService from '../cards/CardService';
import DownloadLink from 'react-download-link';
import urlResume from '../../utils/Juan Diego Salas Jimenez.pdf';

// Style
require('./index.scss');
const photo = require('../../img/jdsj2.jpg');

export default function index() {
	const PersonalData = [
		{
			id: 1,
			title: 'Full name',
			description: 'Juan Diego Salas Jiménez',
		},
		{
			id: 2,
			title: 'Age',
			description: '21',
		},
		{
			id: 3,
			title: 'Birthday',
			description: '9/12/1998',
		},
		{
			id: 4,
			title: 'Nationality',
			description: 'Mexican',
		},
		{
			id: 5,
			title: 'Languages',
			description: 'Spanish (Native) - English (A2)',
		},
		{
			id: 6,
			title: 'Marital status',
			description: 'Single',
		},
	];

	const Services = [
		{
			id: 1,
			icon: 'layers',
			title: 'Web design',
			description:
				'The interface must project the corporate image of the client, its essence and values must be understood beyond placing only the logo.',
		},
		{
			id: 2,
			icon: 'monitor',
			title: 'Web development',
			description:
				'The optimization of the front-end as the back-end of the site; The objective is to control and optimize the website loading process.',
		},
		{
			id: 3,
			icon: 'smartphone',
			title: 'Mobile development',
			description:
				'Mobile devices guarantee the practicality we are looking for, so it is necessary that navigation and functionality be designed for mobile phones.',
		},
	];

	return (
		<>
			<SlideMenu currentPage={ABOUT} />
			<div className='landing-about'>
				<section className='section'>
					<Container fliud={'true'} style={{ width: '100%' }}>
						<Row>
							<Col md={12}>
								<div className='title-section'>
									<h1 className='heading-primary'>About me</h1>
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg={6}>
								<div className='section-content__avatar'>
									<img src={photo} alt='Juan Diego Salas Jimenez' />
								</div>
							</Col>
							<Col lg={6}>
								<div className='section-content__info'>
									<h1 className='secondary'>
										<span>I am </span> Juan Diego Salas Jiménez
									</h1>
									<p className='paragraph'>
										Engineering student in Information Technology and Communications.
									</p>
									<ul className='personal-data'>
										{PersonalData.map((data) => (
											<li key={data.id} className='personal-data__item'>
												<b>{data.title}</b> {data.description}
											</li>
										))}
									</ul>
									<Link
										to='!#'
										className='btn-primary'
										onClick={(event) => {
											event.preventDefault();
											window.open(urlResume);
										}}
									>
										Download resume
									</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<section className='section'>
					<Container fliud={'true'} style={{ width: '100%' }}>
						<Row>
							<Col md={12}>
								<div className='title-section'>
									<h1 className='heading-primary'>Services</h1>
								</div>
							</Col>
						</Row>
						<Row>
							{Services.map((service) => (
								<Col
									key={service.id}
									lg={4}
									md={6}
									sm={12}
									style={{ marginBottom: '3rem' }}
								>
									<CardService
										icon={service.icon}
										title={service.title}
										description={service.description}
									/>
								</Col>
							))}
						</Row>
					</Container>
				</section>
			</div>
		</>
	);
}
