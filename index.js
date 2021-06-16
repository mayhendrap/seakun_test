const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const teacherRoutes = require('./routes/teacher.routes.js');
const adminRoutes = require('./routes/admin.routes.js');

const db = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sync database
db.sequelize.sync();

app.get('/', (req, res) => {
    res.send("Halo")
});

app.use('/teacher', teacherRoutes);
app.use('/admin', adminRoutes);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));