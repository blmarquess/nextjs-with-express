import { Router } from 'express'

export const userRouter = Router()
userRouter
  .get('/', (_req, res) => {
    res.status(200).json({
      message: 'Retornar todos os usuário "/backend/user"',
    })
  })
  .get('/:userId', (_req, res) => {
    res.status(200).json({
      message: 'Retornar usuário pelo id "/backend/user/:userId"',
    })
  })
  .post('/', (_req, res) => {
    res.status(202).json({
      message: 'Criar usuário "/backend/user"',
    })
  })
  .delete('/:userId', (_req, res) => {
    res.status(204).json({
      message: 'Deletar usuário pelo id "/backend/user/:userId"',
    })
  })
  .put('/:userId', (_req, res) => {
    res.status(200).json({
      message: 'Atualizar usuário pelo id "/backend/user/:userId"',
    })
  })
