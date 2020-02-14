import React, { Fragment } from 'react';
import { Col } from 'react-grid-system';

const index = ({ title, percentage }) => {
	return (
		<Fragment>
			<Col lg={4} md={6}>
				<div className='section-content__skills'>
					<div className='mi-progress'>
						<h6 className='mi-progress__title'>{title}</h6>
						<div className='mi-progress__inner'>
							<div className='mi-progress__percentage'>{`${percentage}%`}</div>
							<div className='mi-progress__container'>
								<span
									className='mi-progress-active'
									style={{ width: `${percentage}%` }}
								></span>
							</div>
						</div>
					</div>
				</div>
			</Col>
		</Fragment>
	);
};

export default index;
