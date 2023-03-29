const mongoose= require ("mongoose");
const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Database connected:", 
            connect.connection.host,
            connect.connection.name,
        );
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;



// const mongoose = require('mongoose');
// const uri = 'mongodb://localhost:27017/mydatabase';

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to database'))
//   .catch(error => console.error(error));
