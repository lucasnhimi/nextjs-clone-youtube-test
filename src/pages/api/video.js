// import { connectToDatabase } from 'src/utils/mongodb';
import nextConnect from 'next-connect';
import upload from 'src/utils/upload';

const handler = nextConnect();

handler.use(upload.single('file'));

handler.post(async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  return res.status(200).json({ imageUrl: req.file.location });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
