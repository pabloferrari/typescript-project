import requestIp from 'request-ip';
import { Request, Response, NextFunction } from 'express';

export /**
 * valid token authorization
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void>}
 */
const jwtValidate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
	try {
		// Add jwt validation
		next();
	} catch (error) {
		res.status(401).json({ error: 'unauthorized' });
	}
};
