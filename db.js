const mongoose =require("mongoose");
function connectDB()
{
    mongoose.connect('mongodb+srv://emaJohnDbUser:5eOs4JWEUIFfPXxz@cluster0.xqul9uc.mongodb.net/SheyCars',{useUnifiedTopology:true,useNewUrlParser:true})
    const connection= mongoose.connection

    connection.on('connected',()=>{
        console.log("mongo db connection successfull")
    })

    connection.on('error',()=>{
        console.log("mongo db connection error")
    })
}

connectDB()

module.exports = mongoose