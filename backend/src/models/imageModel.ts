import mongoose, { Document, Schema } from 'mongoose';

interface IImage extends Document {
  filePath: string;
  fileName: string;
}

const ImageSchema: Schema = new Schema({
  filePath: { type: String, required: true },
  fileName: { type: String, required: true },
});

const Image = mongoose.model<IImage>('Image', ImageSchema);

export { Image, IImage };
