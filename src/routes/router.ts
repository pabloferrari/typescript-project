import { IAppRoutes } from '../config/app.interface';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
// import { jwtValidate } from '../middlewares/jwt.middleware';

export const AppRouter: IAppRoutes[] = [
	{
		name: 'auth',
		routes: [
			new AuthRoutes('/auth')
		],
		auth: false
	},
	{
		name: 'api',
		routes: [
			new AppRoutes('/')
		],
		auth: true
	}
];
