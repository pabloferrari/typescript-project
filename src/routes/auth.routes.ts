import { Routes } from '../config/router.config';
import { AuthController } from '../controllers/AuthController';
import { loginRequest } from '../middlewares/requests/auth.middleware';


export class AuthRoutes extends Routes {
	constructor(_path: string) {
		super(_path);
	}

	/**
	 * function for loading routes
	 *
	 * @memberof AuthRoutes
	 */
	public routes(): void {
        this.router.get(`${this.path}/`, AuthController.validate);
        this.router.post(`${this.path}`, loginRequest, AuthController.login)
		
    }
}