module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define("teacher", {
        name: {
            type: DataTypes.STRING
        },
        nuptk: {
            type: DataTypes.STRING
        },
        birthDate: {
            type: DataTypes.DATEONLY
        },
        subject: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER
        },
    });

    return Teacher;
}