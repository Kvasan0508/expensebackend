const mongoose = require('mongoose')


const ConnectDatabase = ()=>{
    try{
        mongoose.connect(process.env.DB_LOCAL_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
    
        }).then(con=>{
            console.log(`MongoDB database connected with HOST: ${con.connection.host}`)
        }
        )
    }catch(err){
        console.log(err)
    }
   
}
module.exports = ConnectDatabase