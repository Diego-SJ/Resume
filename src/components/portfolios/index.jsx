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
							<Col lg={4} sm={12} md={6} className='portfolios-card__wraper'>
								<CardPortfolios
									image={img_p05}
									link={'https://github.com/Diego-SJ/Meet'}
									title='Meet platform'
									description='Simple social network'
								/>
							</Col>
							<Col lg={4} sm={12} md={6} className='portfolios-card__wraper'>
								<CardPortfolios
									image={img_p06}
									link={'https://github.com/Diego-SJ/Resume'}
									title='Curriculum Vitae'
									description='Curriculum vitae online'
								/>
							</Col>
							<Col lg={4} sm={12} md={6} className='portfolios-card__wraper'>
								<CardPortfolios
									image={img_p01}
									link={'https://linuspauling2.000webhostapp.com/awl/'}
									title='App Web Lecturas'
									description='Platform for Linus Pauling Collage'
								/>
							</Col>
							<Col lg={4} sm={12} md={6} className='portfolios-card__wraper'>
								<CardPortfolios
									image={img_p02}
									link={
										'https://github.com/ActoSoft/MexicoTrasciende-Frontend/tree/feature/team_organizer'
									}
									title='Team Organizer'
									description='Module for the “México Trasciende” website'
								/>
							</Col>
							<Col lg={4} sm={12} md={6} className='portfolios-card__wraper'>
								<CardPortfolios
									image={img_p03}
									link={'https://github.com/ActoSoft/buntiAppMobile'}
									title='BuntiApp'
									description='Mobile app'
								/>
							</Col>
							<Col lg={4} sm={12} md={6} className='portfolios-card__wraper'>
								<CardPortfolios
									image={img_p04}
									title='Eco Guardianes'
									description='Mobile App for Ciclo-Pep'
								/>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</Fragment>
	);
};

export default Portfolios;
