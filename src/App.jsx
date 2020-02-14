import React from 'react';
import './sass/main.scss';
import Routing from './routes';
import { ToastProvider } from 'react-toast-notifications';

function App() {
	return (
		<ToastProvider>
			<div className='container'>
				<Routing />
			</div>
		</ToastProvider>
	);
}

export default App;
