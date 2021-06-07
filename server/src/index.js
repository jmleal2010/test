const express = require('express')
const logger = require('morgan')
const app = express();
const indexRouter = require('./routes')
const path = require('path')
const { mongoose } = require('./db')
const globals = require('./utils/globals')

//Settings
app.use(globals.allowCrossDomain)
app.use(logger('dev'));
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use('/api/', indexRouter)


app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log('listening on 3000')
})
