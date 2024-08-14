require('dotenv').config()
const express = require('express')
const cors = require('cors')


const app = express() 

const PORT = process.env.PORT || 9000;

app.use(express.json())
app.use(cors())

app.get("/api/hello", (req, res) => {
  res.json({message: "api is working"})
})


app.get('/api/users', (req, res) => {
  res.json("message")
});
// app.post('/', validateUser, (req, res, next) => {
//  User.insert( req.body ) 
//  .then(user => {
//   res.json(user)
// })
//  .catch(next)
 
// });
app.use('*', (req, res) => {
  res.send(`<h1>Hello, there!</h1>`)
})

app.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
})

app.listen(PORT, ()=> {
  console.log(`listen on ${PORT}`)
})
