import 'dotenv/config'
import express from 'express'
import next from 'next'
import helmet from 'helmet'
import { parse } from 'url'
import { serverRouter } from './src/server/main/router'
import { logger, endpointLogger } from './src/server/main/utils'
import { serverConfig } from './src/config'

const app = next({ dev: serverConfig.inDev })
const handle = app.getRequestHandler()
const server = express()

server
  .disable('x-powered-by')
  .use(helmet())
  .use('/server', serverRouter)
  .all('*', (req, res) => {
    return handle(req, res, parse(req.url, true))
  })
  .listen(serverConfig.port, () => {
    endpointLogger(server)
    logger.info(`Server Ready on ${serverConfig.host}:${serverConfig.port}`)
  })

app.prepare().then(() => server)
