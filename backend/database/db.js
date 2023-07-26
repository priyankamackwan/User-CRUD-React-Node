import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.87tie2o.mongodb.net/User-CRUD-React-Node?retryWrites=true&w=majority`
    // const URL = `mongodb://localhost:27017`
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;