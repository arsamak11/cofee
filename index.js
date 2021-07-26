const express = require('express')

const mongoose =  require('mongoose')

const app = express

app.use(express.json())
app.use(require("./routers/drinks.router"))


mongoose.connect("mongodb+srv://into:code@cluster0.u6m4j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true 
}).then(() => console.log('сервер в порядке'))
.catch(() => console.log('ошибка'))

app.listen(3000, () => {
    console.log('сервер запущен')
})