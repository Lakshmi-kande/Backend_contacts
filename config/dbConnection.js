const mongoose = require ("mongoose");
const connectDb = async() => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        const message = `Database connected: ${connect.connection.host} ${connect.connection.name}`;
        return (message);
    } catch(err) {
        return (err);
    }
};

module.exports = connectDb;