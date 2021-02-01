import { IAppRoutes } from '../config/app.interface';

import { AppRoutes } from './app.routes';
import { UserRoutes } from './user.routes';

export const AppRouter: IAppRoutes[] = [
	{
		name: 'api',
		routes: [
			new AppRoutes('/api')
		],
	},
	{
		name: 'user',
		routes: [
			new UserRoutes('/users')
		],
	}
];
