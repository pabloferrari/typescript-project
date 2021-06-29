import requestIp from 'request-ip';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../config/enviroments';
import { logger } from '../lib/logger';

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
        
        let token = '';
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            token = req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            token = req.query.token as string;
        }
        
        logger.info(`Token -> ${token}`);
        const jwtPayload = jwt.verify(token, JWT_SECRET) as any;
        next();

    } catch (error) {
        
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ error: 'token expired' });
        }
        res.status(401).json({ error: 'unauthorized' });

    }

};
