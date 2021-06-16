module.exports = (sequelize, DataTypes) => {
    const classesTeacher = sequelize.define("class_teacher", {
        classId: {
            type: DataTypes.INTEGER
        },
        teacherId: {
            type: DataTypes.INTEGER
        },
    }, {timestamps: false});

    return classesTeacher;
};