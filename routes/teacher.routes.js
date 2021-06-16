const express = require('express');
const { create, findTeacher, findClasses } = require('../controllers/teacher.controller.js');

const router = express.Router();

router.get('/:userId', findTeacher);
router.get('/:userId/classes', findClasses);

module.exports = router;