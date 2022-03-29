require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db')
const authRoutes = require('./routes/authRoutes.js')
const questionsRoutes = require('./routes/questionsRoutes.js')
const levelRoutes = require('./routes/levelRoutes.js')

connectDB()
const app = express();
const PORT = process.env.PORT || 3001
app.use(express.json())

app.use(cors());

app.use('/api/auth', authRoutes)
app.use('/api/questions', questionsRoutes)
app.use('/api/level', levelRoutes)


setInterval(() => {
    const currentTime = new Date().toLocaleTimeString('en-US', 'europe/stockholm');
    console.log('dato ' + currentTime.toString());
    if(currentTime.toString() === '3:01:20 PM'){
        console.log('*************************15***************************');
    }
}, 1000);

const server = app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
    // eslint-disable-next-line no-console
    console.log(`Logged error: ${err}`);
    server.close(() => process.exit(1));
});
