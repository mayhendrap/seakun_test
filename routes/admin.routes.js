const express = require('express');
const { create, findById, updateById, deleteById, findAll, deleteAll, filterByName, filterByBirthDate } = require('../controllers/admin.controller.js');

const router = express.Router();

router.post('/create-teacher', create);
router.get('/find-all-teacher', findAll);
router.get('/find-teacher/:userId', findById);
router.patch('/update-teacher/:userId', updateById);
router.delete('/delete-teacher/:userId', deleteById);
router.delete('/delete-all-teacher', deleteAll);
router.get('/filter-by-name/:name', filterByName);
router.get('/filter-by-birthdate/:birthdate', filterByBirthDate);

module.exports = router;