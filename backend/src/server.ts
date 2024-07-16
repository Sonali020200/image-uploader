import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './config/db';
import cors from 'cors';
import imageRoutes from './routes/imageRoutes';
import path from 'path';

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/images', imageRoutes); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
