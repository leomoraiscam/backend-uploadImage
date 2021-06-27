import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import AWS from 'aws-sdk';
import multerS3 from 'multer-s3';
import GlobalError from '../errors/GlobalError';

const StorageTypes = {
  local: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (request, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);

        file.key = `${hash.toString('hex')}-${file.originalname}`;
        callback(null, file.key);
      });
    },
  }),
  s3: multerS3({
    s3: new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.REGION,
    }),
    bucket: process.env.AWS_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    key: (request, file, callback) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) callback(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;
        callback(null, fileName);
      });
    },
  }),
};

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: StorageTypes[process.env.STORAGE_TYPE],
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
  fileFilter: (request, file, callback) => {
    const allowedMines = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif',
    ];

    if (allowedMines.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new GlobalError('Invalid type image'));
    }
  },
};
