// ENVIRONMENTS SERVICE
export const HOST = process.env.HOST ? process.env.HOST : 'http://localhost';
export const APP_ENV = process.env.APP_ENV ? process.env.APP_ENV : 'local';
export const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;
