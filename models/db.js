const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDb Connected');
    } catch(err) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1)
    }
}

module.exports = connectDB