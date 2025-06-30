import express from 'express';
import connectDB from './src/configs/db.js';
import userRouter from './src/Routes/userRoutes.js';

const app = express();
const PORT = 4000;

app.use(express.json()); // <-- Fix here

connectDB().then(() => { // <-- Fix here
    app.get('/', (req, res) => {
        res.send('API working...');
    });

    app.use('/api/user', userRouter);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});