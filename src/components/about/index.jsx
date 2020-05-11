import React, { Fragment } from 'react';
import SlideMenu from '../layout/SlideMenu';
import CardService from '../cards/CardService';
import { Container, Row, Col } from 'react-grid-system';
import { ABOUT } from '../../routes/routes';

// Style
require('./index.scss');
const photo = require('../../img/jdsj2.jpg');
const resume = require('../../assets/files/jdsj.pdf');

export default function index() {
	const { urlResume, fileName } = [resume, "Juan Diego Salas Jiménez's CV"];

	return (
		<Fragment>
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
										<li className='personal-data__item'>
											<b>Full name</b> Juan Diego Salas Jiménez
										</li>
										<li className='personal-data__item'>
											<b>Age</b> 21
										</li>
										<li className='personal-data__item'>
											<b>Birthday</b> 9/12/1998
										</li>
										<li className='personal-data__item'>
											<b>Nationality</b> Mexican
										</li>
										<li className='personal-data__item'>
											<b>Languages</b> Spanish (Native) - English (A2)
										</li>
										<li className='personal-data__item'>
											<b>Marital status</b> Single
										</li>
									</ul>
									<a
										href={urlResume}
										without
										className='btn-primary'
										download={fileName}
									>
										Download resume
									</a>
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
							<Col lg={4} md={6} sm={12} style={{ marginBottom: '3rem' }}>
								<CardService
									icon='layers'
									title='Web design'
									description='The interface must project the corporate image of the client, its essence and values must be understood beyond placing only the logo.'
								/>
							</Col>
							<Col lg={4} md={6} sm={12} style={{ marginBottom: '3rem' }}>
								<CardService
									icon='monitor'
									title='Web development'
									description='The optimization of the front-end as the back-end of the site; The objective is to control and optimize the website loading process.'
								/>
							</Col>
							<Col lg={4} md={6} sm={12} style={{ marginBottom: '3rem' }}>
								<CardService
									icon='smartphone'
									title='Mobile development'
									description='Mobile devices guarantee the practicality we are looking for, so it is necessary that navigation and functionality be designed for mobile phones.'
								/>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</Fragment>
	);
}
