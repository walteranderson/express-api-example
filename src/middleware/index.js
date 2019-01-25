import methodOverride from 'method-override'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import authenticate from './authenticate'

import users from '../users'
import auth from '../auth'

const IS_DEVELOPMENT = process.env.APP_ENV === 'development'

export default function (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(methodOverride())

  if (IS_DEVELOPMENT) {
    app.use(morgan('dev'))
  }

  app.use('/api/auth', authenticate, auth)
  app.use('/api/users', authenticate, users)
}
