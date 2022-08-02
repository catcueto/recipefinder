const Sequelize = require("sequelize");

require("dotenv").config();

// Creates connection to our db
const sequelize = process.env.JAWSDB_URL
<<<<<<< HEAD
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(
			process.env.DB_NAME,
			process.env.DB_USER,
			process.env.DB_PW,
			{
				host: "localhost",
				dialect: "mysql",
				port: 3306,
			}
	  );
=======
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    });
>>>>>>> 437873b7521afc5be251dc722b2cc75e8652defc

module.exports = sequelize;
