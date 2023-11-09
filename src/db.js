// db.js
import mongoose from 'mongoose';


const mongoConnect = async () => {


    const { MONGODB_URI } = process.env;

    if (!MONGODB_URI) {
        throw new Error('MONGODB_URI is missing in .env.local');
    }else{
        console.log(MONGODB_URI)
    }

    // await mongoose.connect(, {
    //    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
    // });

    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(MONGODB_URI) 
        console.log('Mongo connected')
        const db = mongoose.connection;

        db.once('open', () => {
            console.log('Connected to MongoDB');
        });
    } catch(error) {
        console.log(error)
        process.exit()
    }


}




export default mongoConnect;
