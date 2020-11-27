import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import crypto from 'crypto';

aws.config.update({
  secretAccessKey: 'DT7sxbNonRvFkw5oEFBJKOEk4VakCWoLjwi6T53y',
  accessKeyId: 'AKIAICUDNHU7R4JWZRQQ',
  region: 'us-east-1',
});

const s3 = new aws.S3({});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'nextjs-clone-youtube',
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
