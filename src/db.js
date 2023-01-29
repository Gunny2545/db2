require('dotenv').config({ path: './config.env' });
const mongoose = require("mongoose");
module.exports = function (app) {
    mongoose.connect(process.env.ATLAS_URI, {       //อ่านค่า ATLAS_URI ใน config.env
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // put your db name
        dbName: "LAPTOP-SHOP"
    }).then(connection => console.log("Application is connected to db")).catch(err => console.log(err))
    mongoose.Promise = global.Promise;
    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);
    if (app) {
        app.set("mongoose", mongoose);
    }
};
function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}