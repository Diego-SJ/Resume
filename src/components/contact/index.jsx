import React, { Fragment } from 'react';
import SlideMenu from '../layout/SlideMenu';
import CardContact from '../cards/CardContact';
import ContactForm from '../forms/ContactForm';
import { Container, Row, Col } from 'react-grid-system';
import { CONTACT } from '../../routes/routes';

// Style
require('./index.scss');

const Contact = () => {
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
								<CardContact
									icon='map-pin'
									title='Address'
									description='Pirul Street # 6 Mzna. Godo, Victoria Dextho, San Salvador Hgo. 42640'
								/>
								<CardContact
									icon='phone'
									title='Phone'
									description='+52 (771) 415 29 97'
								/>
								<CardContact
									icon='at-sign'
									title='Email'
									description='dsalas035@gmail.com'
								/>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		</Fragment>
	);
};

export default Contact;
