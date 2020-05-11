import React, { Fragment } from 'react';
import SlideMenu from '../layout/SlideMenu';
import CardContact from '../cards/CardContact';
import ContactForm from '../forms/ContactForm';
import { Container, Row, Col } from 'react-grid-system';
import { CONTACT } from '../../routes/routes';

// Style
require('./index.scss');

const Contact = () => {
	const contactInfo = [
		{
			id: 1,
			icon: 'map-pin',
			title: 'Address',
			description:
				'Pirul Street # 6 Mzna. Godo, Victoria Dextho, San Salvador Hgo. 42640',
		},
		{
			id: 2,
			icon: 'phone',
			title: 'Phone',
			description: '(+52) 771 415 29 97',
		},
		{
			id: 3,
			icon: 'at-sign',
			title: 'Email',
			description: 'dsalas035@gmail.com',
		},
	];

	return (
		<Fragment>
			<SlideMenu currentPage={CONTACT} />
			<div className='landing-contact'>
				<section className='section'>
					<Container fliud={'true'} style={{ width: '100%' }}>
						<Row>
							<Col md={12}>
								<div className='title-section'>
									<h1 className='heading-primary'>Contact me</h1>
								</div>
							</Col>
						</Row>
						<Row>
							<Col lg={6} md={6} sm={12}>
								<ContactForm />
							</Col>
							<Col lg={6} md={6} sm={12} className='contact-info'>
								{contactInfo.map((item) => (
									<CardContact
										key={item.id}
										icon={item.icon}
										title={item.title}
										description={item.description}
									/>
								))}
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</Fragment>
	);
};

export default Contact;
