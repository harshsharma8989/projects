const express=require('express');
const mongoose=require('mongoose');
const app =express();
const port =5500;
// const bodyParser = require('body-parser')

const mongouri=`mongodb+srv://goeasy:goeasy123@cluster0.edmhw.mongodb.net/goeasy?retryWrites=true&w=majority`;
const bankroutes=require('./routes/bank')
mongoose.connect(mongouri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,

})
.then(console.log('mongoDB connected'))

app.use(express.json());
app.use('/api',bankroutes)


app.listen(port,()=>{
    console.log('server is up '+ port )
})