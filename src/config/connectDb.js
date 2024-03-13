const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('hoidanit', 'root', 'null', {
  host: 'localhost',
  port: '8081',
  dialect: 'mysql',
  logging: false //hidden log query
});

let connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
module.exports = connectDb;