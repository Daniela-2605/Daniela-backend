const { MongoClient, ServerApiversion } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGO_URI

const client= new MonglClient(uri, {
    serverAPi: {
        version: ServerApiversion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

const validatedb = async () => {
    try {
        await client.connect()
        console.log('se conecto');
    } catch (error) {
        console.error(error);
    }
}

validatedb()

module.exports = client;