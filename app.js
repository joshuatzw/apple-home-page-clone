const express = require('express')
const bp = require('body-parser')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000
const publicPath = path.join(__dirname)

app.use(express.static('public'))
app.use(bp.urlencoded({extended: true}))

app.get("*", (req, res)=>{
  res.sendFile(path.join(publicPath, "index.html"))
})

app.listen(PORT, ()=>{
  console.log(`port opened on ${PORT}`)
})

