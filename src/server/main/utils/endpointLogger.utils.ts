import listEndPoints from 'express-list-endpoints'
import { logger } from './logger.utils'
import { Express } from 'express'

export const endpointLogger = (appServer: Express) =>
  listEndPoints(appServer).forEach((endpoint) => {
    endpoint.path !== '*' &&
      logger.info(`Endpoint: [${endpoint.path}] Methods: [${endpoint.methods}]`)
  })
