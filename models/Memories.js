// models/User.js
import mongoose from 'mongoose';

const memoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Store the image URL
    required: true,
  },
});

const Memories = mongoose.model('Memories', memoriesSchema);

export default Memories;
