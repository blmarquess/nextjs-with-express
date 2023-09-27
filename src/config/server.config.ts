export const serverConfig = {
  port: parseInt(process.env.PORT ?? '8080', 10),
  inDev: process.env.NODE_ENV !== 'production',
  host: process.env.HOST ?? 'http://localhost',
}
