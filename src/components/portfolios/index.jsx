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
const img_p06 = require('../../img/portfolios/cvra.jpg');
const img_p05 = require('../../img/portfolios/meet.jpg');

const Portfolios = () => {
	const portfolioInfo = [
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
