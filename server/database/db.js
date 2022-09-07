import mongoose from "mongoose"

const Connection = async (username,password) => {

    const URL= `mongodb://${username}:${password}@ac-vsn6db1-shard-00-00.2pms2do.mongodb.net:27017,ac-vsn6db1-shard-00-01.2pms2do.mongodb.net:27017,ac-vsn6db1-shard-00-02.2pms2do.mongodb.net:27017/?ssl=true&replicaSet=atlas-lk2ptt-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');

    }
    catch (error) {
        console.log('Error while connecting with database', error);
    }

}
export default Connection;