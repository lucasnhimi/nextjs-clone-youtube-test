import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import crypto from 'crypto';

aws.config.update({
  secretAccessKey: 'vFu2uY9ccJ4CKNHSXjXJb+gaM3gnbZqNnvwOSlFm',
  accessKeyId: 'AKIAJ6WIDR4VOJ5PYLOQ',
  region: 'us-east-1',
});

const s3 = new aws.S3({});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'next-clone-youtube-test',
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata(req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, fileName);
      });
    },
  }),
});

export default upload;
