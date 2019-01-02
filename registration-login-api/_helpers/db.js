const config = require('config.json');
const url = config.connectionString

const mongoose = require('mongoose');
mongoose.connect(url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});;
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model')
};