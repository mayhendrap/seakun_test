const dbConfig = require('../config/db.config.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, DataTypes);
db.teachers = require("./teacher.model.js")(sequelize, DataTypes);
db.classes = require("./class.model.js")(sequelize, DataTypes);
db.classesTeacher = require("./classesTeacher.model.js")(sequelize, DataTypes);

db.users.hasOne(db.teachers, {foreignkey: "userId"});
db.teachers.belongsTo(db.users, {foreignkey: "userId"});

db.teachers.belongsToMany(db.classes, {through: "class_teacher", foreignkey: "userId"});
db.classes.belongsToMany(db.teachers, {through: "class_teacher", foreignkey: "userId"});

module.exports = db;