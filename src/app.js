import express from 'express'
import attachMiddleware from './middleware'

const app = express()

attachMiddleware(app)

app.get('/', (req, res) => res.send('hello world'))

export default app

