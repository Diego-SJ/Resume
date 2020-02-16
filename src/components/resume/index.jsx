import React, { Fragment } from 'react';
import SlideMenu from '../layout/SlideMenu';
import Skill from '../skill';
import { Container, Row, Col } from 'react-grid-system';
import { RESUME } from '../../routes/routes';

// Style
require('./index.scss');

export default function index() {
	return (
		<Fragment>
			<SlideMenu currentPage={RESUME} />
			<div className='landing-portfolios'>
				<section className='section'>
					<Container fliud={'true'} style={{ width: '100%' }}>
						<Row>
							<Col md={12}>
								<div className='title-section'>
									<h1 className='heading-primary'>Skills</h1>
								</div>
							</Col>
						</Row>
						<Row>
							<Skill title='HTML' percentage='90' />
							<Skill title='CSS' percentage='85' />
							<Skill title='JAVASCRIPT' percentage='85' />
							<Skill title='PHP' percentage='90' />
							<Skill title='PYTHON' percentage='30' />
							<Skill title='C ++' percentage='30' />
							<Skill title='C#' percentage='30' />
							<Skill title='JAVA' percentage='90' />
							<Skill title='SQL' percentage='85' />
						</Row>
					</Container>
				</section>

				<section className='section'>
					<Container fliud={'true'} style={{ width: '100%' }}>
						<Row>
							<Col md={12}>
								<div className='title-section'>
									<h1 className='heading-primary'>EDUCATION</h1>
								</div>
							</Col>
						</Row>
						<Row>
							<div className='resume-section'>
								<ul className='time-line'>
									<li className='time-line__item'>
										<span className='time-line__date'>Aug 2016 - Present</span>
										<div className='time-line__content'>
											<h3>Information Technology and Communications Engineering</h3>
											<h4>
												Instituto Tecnológico Superior del Occidente del Estado de
												Hidalgo(ITSOEH)
											</h4>
											<p>Mixquiahuala de Juárez Hgo.</p>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Aug 2013 - Jul 2016</span>
										<div className='time-line__content'>
											<h3>Programming Technician</h3>
											<h4>
												Centro de Bachillerato Tecnológico Industrial y de Servicios No. 83
											</h4>
											<p>Actopan Hgo.</p>
										</div>
									</li>
								</ul>
							</div>
						</Row>
						<Row>
							<Col md={12}>
								<div className='title-section'>
									<h1 className='heading-primary'>Professional experience</h1>
								</div>
							</Col>
						</Row>
						<Row>
							<div className='resume-section'>
								<ul className='time-line'>
									<li className='time-line__item'>
										<span className='time-line__date'>Jun 2019 - Present</span>
										<div className='time-line__content'>
											<h3>Mobile developer</h3>
											<h4>Actosoft Community</h4>
											<p>Mobile application developer, member of the development team.</p>
											<p>
												Back-end development for user registration and geolocation of the
												“Bunti App” mobile app.
											</p>
											<p>
												Front-end development of the “Team organizer” module for the “México
												Trasciende” website, Tecnológico de Monterrey.
											</p>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Dec 2019 - Present</span>
										<div className='time-line__content'>
											<h3>Freelancer</h3>
											<h4>Freelancer</h4>
											<p>
												Full-stack development of the “Meet” web platform, Mixquiahuala de
												Juárez (In Process).
											</p>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Jun 2019 - Dec 2019</span>
										<div className='time-line__content'>
											<h3>Web developer</h3>
											<h4>Colegio Linus Pauling</h4>
											<p>
												Development of the “App Web Lecturas” platform to record, analyze
												and present data on learning in the Linus Pauling school, Progreso
												de Obregón
											</p>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Aug 2017 - Dec 2017</span>
										<div className='time-line__content'>
											<h3>Mobile developer and designer</h3>
											<h4>Ciclo-pep</h4>
											<p>
												Member of the back-end and front-end development team of the “Eco
												Guardianes” mobile app.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</Row>
						<Row>
							<Col md={12}>
								<div className='title-section'>
									<h1 className='heading-primary'>RECOGNITIONS AND COURSES</h1>
								</div>
							</Col>
						</Row>
						<Row>
							<div className='resume-section'>
								<ul className='time-line'>
									<li className='time-line__item'>
										<span className='time-line__date'>Present</span>
										<div className='time-line__content'>
											<h3>Course "CCNA R&S: Scaling Networks" by Cisco and ITSOEH</h3>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Oct 2019</span>
										<div className='time-line__content'>
											<h3>
												Place No.18 nationwide in the "Coding CupTecNM" programming contest
											</h3>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Jan 2019</span>
										<div className='time-line__content'>
											<h3>Course "CCNA R&S: Connecting Networks" by Cisco and ITSOEH</h3>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Aug 2018</span>
										<div className='time-line__content'>
											<h3>
												Course "CCNA R&S: Routing and Switching Essentials" by Cisco and
												ITSOEH
											</h3>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>May 2018</span>
										<div className='time-line__content'>
											<h3>
												Participation in the course "Diseña tu propia página web desde 0"
												Provided by SoftMotion
											</h3>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Oct 2018</span>
										<div className='time-line__content'>
											<h3>
												1st Place in the "Rally Latinoamericano de innovación" at
												headquarters level
											</h3>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Jan 2017</span>
										<div className='time-line__content'>
											<h3>
												Course "CCNA R&S: Introduction to Networks" by Cisco and ITSOEH
											</h3>
										</div>
									</li>
									<li className='time-line__item'>
										<span className='time-line__date'>Jun 2015</span>
										<div className='time-line__content'>
											<h3>
												Accreditation of competences in Microsoft Technologies for
												productivity (Word, Excel and PowerPoint) by SEP and Microsoft
												Mexico
											</h3>
										</div>
									</li>
								</ul>
							</div>
						</Row>
					</Container>
				</section>
			</div>
		</Fragment>
	);
}
