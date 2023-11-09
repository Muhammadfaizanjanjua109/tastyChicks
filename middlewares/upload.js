// middleware/upload.js
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads'); // Define the destination for file uploads
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname); // Define the filename
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
