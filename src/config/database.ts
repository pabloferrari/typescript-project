import mongoose from 'mongoose';
import { APP_NAME, DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS, MONGODB_URI } from './enviroments';

import { logger } from '../lib/logger';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
