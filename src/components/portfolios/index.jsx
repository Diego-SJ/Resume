import React, { Fragment } from 'react';
import SlideMenu from '../layout/SlideMenu';
import { Container, Row, Col } from 'react-grid-system';
import CardPortfolios from '../cards/CardPortfolios';
import { PORTFOLIOS } from '../../routes/routes';

// Style
require('./index.scss');
const img_p01 = require('../../img/portfolios/awl.jpg');
const img_p02 = require('../../img/portfolios/mtw.jpg');
const img_p03 = require('../../img/portfolios/bunti.jpg');
const img_p04 = require('../../img/portfolios/egcp.jpg');
const img_p05 = require('../../img/portfolios/meet.jpg');
const img_p06 = require('../../img/portfolios/cvra.jpg');
const img_p07 = require('../../img/portfolios/ecowatering.jpg');
const img_p08 = require('../../img/portfolios/fixstone.jpg');
const img_p09 = require('../../img/portfolios/prs.jpg');
const img_p10 = require('../../img/portfolios/natours.jpg');
const img_p11 = require('../../img/portfolios/paleteria.jpg');

const Portfolios = () => {
	const portfolioInfo = [
		{
			id: 11,
			image: img_p11,
			link: 'https://github.com/Diego-SJ/PaleteriaChuchin',
			title: 'Paleteria Chuchin',
			description: 'Desktop application with Electron, React and Fireabse',
		},
		{
			id: 1,
			image: img_p05,
			link: 'https://github.com/Diego-SJ/Meet',
			title: 'Meet platform',
			description: 'Simple social network',
		},
		{
			id: 2,
			image: img_p06,
			link: 'https://github.com/Diego-SJ/Resume',
			title: 'My resume',
			description: 'My resume online',
		},
		{
			id: 3,
			image: img_p01,
			link: 'https://linuspauling2.000webhostapp.com/awl/',
			title: 'App Web Lecturas',
			description: 'Platform for Linus Pauling Collage',
		},
		{
			id: 4,
			image: img_p02,
			link:
				'https://github.com/ActoSoft/MexicoTrasciende-Frontend/tree/feature/team_organizer',
			title: 'Team Organizer',
			description: 'Module for the “México Trasciende” website',
		},
		{
			id: 7,
			image: img_p07,
			link: 'https://ecowateringplants.000webhostapp.com/ecowateringplants.com/',
			title: 'Ecowatering Plants',
			description: 'Website for school project',
		},
		{
			id: 8,
			image: img_p08,
			link: 'https://diego-sj.github.io/Fixstone-Website/',
			title: 'Fixstone landing page',
			description: 'Fixstone landing page prototype',
		},
		{
			id: 9,
			image: img_p09,
			link: 'https://diego-sj.github.io/ui-psr/',
			title: 'Paper, rock or scissors',
			description: 'Game of paper rock or scissors with js and Sass',
		},
		{
			id: 10,
			image: img_p10,
			link: 'https://diego-sj.github.io/Natours-With-Sass/',
			title: 'Natours landing page',
			description: 'Landing page with Sass (no responsive)',
		},
		{
			id: 11,
			image: img_p10,
			link: 'https://diego-sj.github.io/Natours-With-Sass/',
			title: 'Natours landing page',
			description: 'Landing page with Sass (no responsive)',
		},
		{
			id: 5,
			image: img_p03,
			link: 'https://github.com/ActoSoft/buntiAppMobile',
			title: 'BuntiApp',
			description: 'Mobile app',
		},
		{
			id: 6,
			image: img_p04,
			link: null,
			title: 'BuntiEco GuardianesApp',
			description: 'Mobile App for Ciclo-Pep',
		},
	];

	return (
		<Fragment>
			<SlideMenu currentPage={PORTFOLIOS} />
			<div className='landing-portfolios'>
				<section className='section'>
					<Container fliud={'true'} style={{ width: '100%' }}>
						<Row>
							<Col md={12}>
								<div className='title-section'>
									<h1 className='heading-primary'>Portfolios</h1>
								</div>
							</Col>
						</Row>

						<Row>
							{portfolioInfo.map((item) => (
								<Col lg={4} sm={12} md={6} className='portfolios-card__wraper'>
									<CardPortfolios
										id={item.id}
										image={item.image}
										title={item.title}
										description={item.description}
										link={item.link !== null ? item.link : null}
									/>
								</Col>
							))}
						</Row>
					</Container>
				</section>
			</div>
		</Fragment>
	);
};

export default Portfolios;
