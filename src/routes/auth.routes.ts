import { Routes } from '../config/router.config';
import { AuthController } from '../controllers/AuthController';


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
        this.router.post(`${this.path}`, AuthController.login)
		
    }
}