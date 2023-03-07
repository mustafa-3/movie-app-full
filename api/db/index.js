const Sequelize = require("sequelize");

const sequelize = new Sequelize("moviedb", "root", "Nfy1412!", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("mysql server bağlantısı yapıldı.");
  })
  .catch((err) => {
    console.error(`Unable to connect to databese `, err);
  });

module.exports = sequelize;
