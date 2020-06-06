import React from 'react';
import IcoMoon from 'react-icomoon';
import iconSet from './selection.json';

export default function Icon({ ...props }) {
	return <IcoMoon iconSet={iconSet} {...props} />;
}
