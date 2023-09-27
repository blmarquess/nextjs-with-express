import winston from 'winston'

const logFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'DD/MM/YYYY HH:mm:ss',
  }),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} { [${level}] ${message} }`
  })
)
export const logger = winston.createLogger({
  levels: {
    fatal: 0,
    error: 1,
    warn: 2,
    info: 3,
    trace: 4,
    debug: 5,
  },
  level: 'debug',
  format: logFormat,
  transports: [new winston.transports.Console({ level: 'debug' })],
})
