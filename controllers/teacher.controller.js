const db = require('../models');
const Class = db.classes;
const Teacher = db.teachers;
const User = db.users;

// Find Single
exports.findTeacher = async (req, res) => {
    const id = req.params.userId;
    try {
        const teacher = await Teacher.findAll({where: {id}, include: [{model: User, attributes: ["username"]}], attributes: ["name", "nuptk", "birthDate", "subject"]});
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while find data" });
    }
};

exports.findClasses = async (req, res) => {
    try {
        const allClasses = await Teacher.findAll({include: [{model: Class, attributes: ["className", "dateTime"]}], attributes: ["name", "nuptk", "birthDate", "subject"]});
        res.status(200).json(allClasses);
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while find data" });
    }
};