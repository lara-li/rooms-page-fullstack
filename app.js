const express=require('express');
const app=express();
const db=require('./database/database');

app.set('views',`${__dirname}/views`);

app.use(express.static('static'));

app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
   res.sendFile(`${__dirname}/views/rooms.html`);
});
app.get('/rooms',async(req,res)=>{
   const [result]=await db.query('SELECT * FROM rooms');
   res.json(result);
})


app.listen(3000);