import { Routes } from '../config/router.config';
import { HomeController } from '../controllers/HomeController';

export class AppRoutes extends Routes {
	constructor(_path: string) {
		super(_path);
	}

	/**
	 * function for loading routes
	 *
	 * @memberof AppRoutes
	 */
	public routes(): void {
		// console.log('FLAG',this, this.path, this.router);
        this.router.get(`${this.path}/`, HomeController.index);
		// this.router.get(`${this.path}/`, PaymentController.getPayments);
		// this.router.get(`${this.path}/create`, PaymentController.createPayment);
		
    }
}