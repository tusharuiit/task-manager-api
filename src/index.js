const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb)    {
//         if(!file.originalname.match(/\.(doc|docx)$/))   {
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined, true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true, )
//         // cb(undefined, false) - will not be used.
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload', upload.single('upload') , (req, res) =>   {
//     res.send()
// },(error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })

// app.use((req, res, next) =>   {
//     if(req.method === 'GET')    {
//         res.send('GET requests are disabled')
//     }   else    {
//         next()
//     }
// })

// app.use((req, res, next) =>   {
//         res.status(503).send('Site is currently down')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5ea366419cecbf5bbdc5cc47')
//     // await task.populate('owner').execPopulate()
//     // console.log('task Owner = \n', task.owner)

//     const user = await User.findById('5ea36120d34eb1187ccc4590')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const myFunction = async () =>  {
//     const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '14 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
//     // const password = 'Red12345!'
//     // const hashedPassword = await bcrypt.hash(password, 8)

//     // console.log(password)
//     // console.log(hashedPassword)

//     // const isMatch = await bcrypt.compare('red12345!', hashedPassword)
//     // console.log(isMatch)
// }

// myFunction()

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function ()    {
//     console.log(this)
//     return this
// }

// console.log(JSON.stringify(pet))