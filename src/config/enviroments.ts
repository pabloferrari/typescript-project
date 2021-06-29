// ENVIRONMENTS SERVICE
export const APP_NAME = process.env.APP_NAME || 'test-project';
export const HOST = process.env.HOST || 'http://localhost';
export const APP_ENV = process.env.APP_ENV || 'local';
export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
export const JWT_SECRET = process.env.JWT_SECRET || '1234';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || 1000;


export const DB_NAME = process.env.DB_NAME || 'app';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = process.env.DB_PORT || '27017';
export const DB_USER = process.env.DB_USER || '';
export const DB_PASS = process.env.DB_PASS || '';
export const MONGODB_URI = process.env.MONGODB_URI || null;
