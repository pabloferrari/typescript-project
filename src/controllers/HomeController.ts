import { Request, Response } from 'express';

export class HomeController {
	
	public static async index(req: Request, res: Response): Promise<void> {
		try {
			res.status(200).json({ route: 'home' });
		} catch (error) {
			res.status(500).json(error);
		}
	}

	
}
