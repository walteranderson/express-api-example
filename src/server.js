import mongoose from 'mongoose'
import app from './app'

const PORT = process.env.PORT
const MONGO_DB_URL = process.env.MONGO_DB_URL

mongoose.connect(MONGO_DB_URL)

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))
