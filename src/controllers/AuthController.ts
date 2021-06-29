import { Request, Response } from 'express';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/enviroments';
import * as jwt from 'jsonwebtoken';

export class AuthController {
	
	public static async validate(req: Request, res: Response): Promise<void> {
		try {
			res.status(200).json({ route: req.path });
		} catch (error) {
			res.status(500).json(error);
		}
	}

	public static async login(req: Request, res: Response): Promise<void> {
		try {

			const newToken = jwt.sign({ id: 1, email: 'pablo.ferrari@me.com' }, JWT_SECRET, {
				expiresIn: JWT_EXPIRES_IN
			});


			res.status(200).json({ token: newToken });
		} catch (error) {
			res.status(500).json(error);
		}
	}

		

	
}
