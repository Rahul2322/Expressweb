const express=require('express');
const path=require('path');
const port=process.env.PORT || 3000;//means if 3000 not availaable find some port and use it
const app=express();
const hbs=require('hbs')

app.set('view engine', 'hbs');

const staticPath=path.join(__dirname,'../public');
const template_Path=path.join(__dirname,'../templates/views');
const partials_Path=path.join(__dirname,'../templates/partials');
app.set('views',template_Path)
hbs.registerPartials(partials_Path)

app.use(express.static(staticPath))//this is needed to use css folder

//routing

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/about',(req,res)=>{
    res.render("about")

})
app.get('/weather',(req,res)=>{
    res.render("weather")

})
app.get('*',(req,res)=>{
    res.render("404",{
        errormsg:"Oops,Sorry the page doesn't exist"
    })
})
app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})