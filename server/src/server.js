import express, { urlencoded } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: false }))

app.listen('3001', () => {
  console.log('Server is on port 3001!')
})

app.post('/api/update-todo', (req, res) => {

})