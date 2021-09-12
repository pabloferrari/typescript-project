import { Routes } from '../config/router.config';
import { HomeController } from '../controllers/HomeController';

export class UserRoutes extends Routes {
	constructor(_path: string) {
		super(_path);
	}

	/**
	 * function for loading routes
	 *
	 * @memberof UserRoutes
	 */
	public routes(): void {
        // this.router.get(`${this.path}/`, HomeController.index);
		// this.router.get(`${this.path}/`, PaymentController.getPayments);
		// this.router.get(`${this.path}/create`, PaymentController.createPayment);
		
    }
}