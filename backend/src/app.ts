import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import imageRoutes from './routes/imageRoutes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use(imageRoutes);

app.get('/api/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching images', error });
  }
});

connectDB();

export default app;
