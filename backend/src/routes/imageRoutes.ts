import express from 'express';
import multer from 'multer';
import { uploadImage, getImages } from '../controllers/imageController';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), uploadImage);
router.get('/', getImages);  // Ensure this endpoint is correct

export default router;
