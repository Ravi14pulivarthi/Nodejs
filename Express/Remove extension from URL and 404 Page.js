
const express=require("express")
 const path= require('path')
  const app = express()

   const publicepath=path.join(__dirname,'publice')

   const views=path.join(__dirname,'views')

    app.set('view engine','ejs')

    app.get('',(req,resp)=>{
        resp.sendFile(`${publicepath}/index.html`)
    })
    app.get('/about',(req,resp)=>{
        resp.sendFile(`${publicepath}/about.html`)
    })
    app.get('/help',(req,resp)=>{
        resp.sendFile(`${publicepath}/help.html`)
    })
    // one
     app.get('/profile',(req,resp)=>{
        const user={name:"Ravikumar Pulivarthi",email:"ravi@1998,gail.com",age:25,study:"MCA"}
        resp.render(`${views}/profile`,{user})
     })
    app.get('*',(req,resp)=>{
        resp.sendFile(`${publicepath}/error.html`)
    })
     app.listen(5000)
