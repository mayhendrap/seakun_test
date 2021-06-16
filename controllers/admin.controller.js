const db = require('../models');
const Teacher = db.teachers;
const User = db.users;

const Op = db.Sequelize.Op;

// Create Teacher
exports.create = async (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty!" })
        return;
    };
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            role: "Teacher"
        });

        const teacher = await Teacher.create({
            name: req.body.name,
            nuptk: req.body.nuptk,
            birthDate: req.body.birthDate,
            subject: req.body.subject,
            userId: user.id,
        });
        res.status(200).json(teacher)
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while creating data" });
    }
};

// Retrieve all
exports.findAll = async (req, res) => {
    try {
        const teacher = await Teacher.findAll({include: User});
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while find data" });
    }
};

// Find Single
exports.findById = async (req, res) => {
    const id = req.params.userId;
    try {
        const teacher = await Teacher.findAll({where: {id}, include: [{model: User}]});
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while find data" });
    }
};

// Update teacher
exports.updateById = async (req, res) => {
    const id = req.params.userId;
    try {
        const teacher = await Teacher.update(req.body, {where: {id}});
        if (teacher == 1) {
            res.status(200).json("Teacher was updated succesfully");
        } else {
            res.status(500).json(`Cannot update Teacher with id = ${id}`);
        }
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while updating data" });
    }
};

// Delete teacher by id
exports.deleteById = async (req, res) => {
    const id = req.params.userId;
    try {
        const teacher = await Teacher.destroy({where: {id}});
        if (teacher == 1) {
            res.status(200).json("Teacher was deleted succesfully");
        } else {
            res.status(500).json(`Cannot delete Teacher with id = ${id}`);
        }
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while updating data" });
    }
};

// Delete All
exports.deleteAll = async (req, res) => {
    try {
        await Teacher.destroy({where: {}, truncate: false});
        res.status(200).json("All teacher was deleted succesfully");
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while updating data" });
    }
};

// Filter by name
exports.filterByName = async (req, res) => {
    try {
        const teachers = await Teacher.findAll({where: {name: {
            [Op.like]: `%${req.params.name}%`
        }}});
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while updating data" });
    }
};

exports.filterByBirthDate = async (req, res) => {
    try {
        const teachers = await Teacher.findAll({where: {birthDate: {
            [Op.like]: `%${req.params.birthdate}%`
        }}});
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: error || "Some error occured while updating data" });
    }
};
