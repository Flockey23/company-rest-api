const Sequelize = require("sequelize");
const config = require("../config.json")
const sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: config.dialect,
    host: config.host,
    define: {
        timestamps: false
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.companies = require("../Models/Company")(sequelize, Sequelize);
db.users = require("../Models/User")(sequelize,Sequelize);

async function checkConnectionDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

function syncDB(){
    sequelize.sync({force:true}).then(result=>{
        console.log(result);
    })
        .catch(err=> console.log(err));
}
module.exports = { checkConnectionDB , db,syncDB }
