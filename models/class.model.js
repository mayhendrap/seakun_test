module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define("class", {
        className: {
            type: DataTypes.STRING
        },
        dateTime: {
            type: DataTypes.DATE
        }
    });
    return Class;
}