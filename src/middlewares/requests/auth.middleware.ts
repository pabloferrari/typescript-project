import { requestValidate } from '../../config/request-validate.config';
import { check } from 'express-validator';
import { MessageValidator } from '../../lib/message-validator';

export const loginRequest = requestValidate([
	check('email')
        .exists({ checkFalsy: true, checkNull: true })
        .withMessage(MessageValidator.isRequired('email')),
	check('password')
		.exists({ checkFalsy: true, checkNull: true })
		.withMessage(MessageValidator.isRequired('password'))
]);
