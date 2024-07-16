import { Request, Response } from 'express';
import { Image } from '../models/imageModel';

export const uploadImage = async (req: Request, res: Response) => {
  if (req.file) {
    const filePath = `/uploads/${req.file.filename}`;
    const fileName = req.file.originalname;

    try {
      // Save file details to the database
      const newImage = new Image({
        filePath,
        fileName,
      });

      await newImage.save();

      res.status(200).json({ filePath });
    } catch (error) {
      res.status(500).json({ error: 'Error saving image to the database' });
    }
  } else {
    res.status(400).json({ error: 'No file uploaded' });
  }
};

export const getImages = async (req: Request, res: Response) => {
  try {
    const images = await Image.find();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching images', error });
  }
};
