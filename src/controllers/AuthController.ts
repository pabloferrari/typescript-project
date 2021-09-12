import { Request, Response } from 'express';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/enviroments';
import * as jwt from 'jsonwebtoken';
import { logger } from '../lib/logger';

export class AuthController {
	
	public static async validate(req: Request, res: Response): Promise<void> {
		try {

			let token = '';
			if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
				token = req.headers.authorization.split(' ')[1];
			} else if (req.query && req.query.token) {
				token = req.query.token as string;
			}
			
			logger.info(`Token -> ${token}`);
			const jwtPayload = jwt.verify(token, JWT_SECRET) as any;

			res.status(200).json({ result: jwtPayload });
			
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
