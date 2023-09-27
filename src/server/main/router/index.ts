import { Router, json } from 'express'
import { userRouter } from './user.router'

export const serverRouter = Router().use(json()).use('/user', userRouter)
