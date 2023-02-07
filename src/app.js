const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000;

let publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath))
app.set('views', path.resolve(__dirname, 'views')); 
app.set('view engine', 'ejs')

const mainRouter = require('./routes/mainRouter.js')
app.use('/', mainRouter)
// app.get("/",(req,res) => res.sendFile(path.join(viewsPath,"./home.html")))

// app.get("/",(req,res) => res.sendFile(path.join(viewsPath,"./home.html")))


app.listen(port, () => {
    console.log("Servidor corriendo en el puerto " + port);
})