import React, { Fragment } from 'react';
import SlideMenu from '../layout/SlideMenu';
import Skill from '../skill';
import { Container, Row, Col } from 'react-grid-system';
import { RESUME } from '../../routes/routes';

// Style
require('./index.scss');

export default function index() {
	const Skills = [
		{ id: 1, title: 'HTML', percentage: '90' },
		{ id: 2, title: 'CSS', percentage: '85' },
		{ id: 3, title: 'JAVASCRIPT', percentage: '85' },
		{ id: 4, title: 'PHP', percentage: '90' },
		{ id: 5, title: 'PYTHON', percentage: '40' },
		{ id: 6, title: 'C++', percentage: '35' },
		{ id: 7, title: 'C#', percentage: '30' },
		{ id: 8, title: 'JAVA', percentage: '90' },
		{ id: 9, title: 'SQL', percentage: '85' },
	];

	const Education = [
		{
			id: 1,
			date: 'Aug 2016 - Present',
			title: 'Information Technology and Communications Engineering',
			description:
				'Instituto Tecnológico Superior del Occidente del Estado de Hidalgo(ITSOEH)',
			place: 'Mixquiahuala de Juárez Hgo.',
		},
		{
			id: 2,
			date: 'Aug 2013 - Jul 2016',
			title: 'Programming Technician',
			description:
				'Centro de Bachillerato Tecnológico Industrial y de Servicios No. 83',
			place: 'Actopan Hgo.',
		},
	];

	const ProfessionalExperience = [
		{
			id: 1,
			date: 'Jun 2019 - Present',
			title: 'Software developer',
			subtitle: 'Actosoft Community',
			description:
				'Mobile application developer, member of the development team.\nBack-end development for user registration and geolocation of the “Bunti App” mobile app.\nFront-end development of the “Team organizer” module for the “México Trasciende” website, Tecnológico de Monterrey.',
		},
		{
			id: 2,
			date: 'Dec 2019 - Present',
			title: 'Freelancer',
			subtitle: 'Freelancer',
			description:
				'Development of the “Meet” web platform, Mixquiahuala de Juárez (In Process).',
		},
		{
			id: 3,
			date: 'Jun 2019 - Dec 2019',
			title: 'Web developer',
			subtitle: 'Colegio Linus Pauling',
			description:
				'Development of the “App Web Lecturas” platform to record, analyze and present data on learning in the Linus Pauling school, Progreso de Obregón.',
		},
		{
			id: 4,
			date: 'Aug 2017 - Dec 2017',
			title: 'Mobile developer and designer',
			subtitle: 'Ciclo-pep',
			description:
				'Member of the back-end and front-end development team of the “Eco Guardianes” mobile app.',
		},
	];

	const Recognitions = [
		{
			id: 1,
			date: 'Present',
			description: 'Course "CCNA R&S: Scaling Networks" by Cisco and ITSOEH.',
		},
		{
			id: 2,
			date: 'Present',
			description: 'Course "Cybersecurity Essentials" by Cisco and ITSOEH.',
		},
		{
			id: 3,
			date: 'Oct 2019',
			description:
				'Place No.18 nationwide in the "Coding CupTecNM" programming contest.',
		},
		{
			id: 4,
			date: 'Jan 2019',
			description: 'Course "CCNA R&S: Connecting Networks" by Cisco and ITSOEH.',
		},
		{
			id: 5,
			date: 'Aug 2018',
			description:
				'Course "CCNA R&S: Routing and Switching Essentials" by Cisco and ITSOEH.',
		},
		{
			id: 6,
			date: 'May 2018',
			description:
				'Participation in the course "Diseña tu propia página web desde 0" Provided by SoftMotion.',
		},
		{
			id: 7,
			date: 'Oct 2018',
			description:
				'1st Place in the "Rally Latinoamericano de innovación" at headquarters level.',
		},
		{
			id: 8,
			date: 'Jan 2017',
			description:
				'Course "CCNA R&S: Introduction to Networks" by Cisco and ITSOEH.',
		},
		{
			id: 9,
			date: 'Jun 2015',
			description:
				'Accreditation of competences in Microsoft Technologies for productivity (Word, Excel and PowerPoint) by SEP and Microsoft Mexico.',
		},
	];

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
							{Skills.map((skill) => (
								<Skill
									key={skill.id}
									title={skill.title}
									percentage={skill.percentage}
								/>
							))}
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
									{Education.map((education) => (
										<li key={education.id} className='time-line__item'>
											<span className='time-line__date'>{education.date}</span>
											<div className='time-line__content'>
												<h3>{education.title}</h3>
												<h4>{education.description}</h4>
												<p>{education.place}</p>
											</div>
										</li>
									))}
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
									{ProfessionalExperience.map((experience) => (
										<li key={experience.id} className='time-line__item'>
											<span className='time-line__date'>{experience.date}</span>
											<div className='time-line__content'>
												<h3>{experience.title}</h3>
												<h4>{experience.subtitle}</h4>
												<p>{experience.description}</p>
											</div>
										</li>
									))}
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
									{Recognitions.map((recognitions) => (
										<li key={recognitions.id} className='time-line__item'>
											<span className='time-line__date'>{recognitions.date}</span>
											<div className='time-line__content'>
												<h3>{recognitions.description}</h3>
											</div>
										</li>
									))}
								</ul>
							</div>
						</Row>
					</Container>
				</section>
			</div>
		</Fragment>
	);
}
