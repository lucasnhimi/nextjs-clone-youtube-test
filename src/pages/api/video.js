import { connectToDatabase } from 'src/utils/mongodb';
import { ObjectId } from 'mongodb';
import nextConnect from 'next-connect';
import upload from 'src/utils/upload';

const handler = nextConnect();

handler.use(upload.single('file'));

handler.post(async (req, res) => {
  const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;

  const { db } = await connectToDatabase();
  const collection = db.collection('videos');

  await collection.insertOne({
    title,
    authorId: ObjectId(authorId),
    authorName,
    authorAvatar,
    views: 0,
    thumb: req.file.location,
    videoUrl,
    updatedAt: new Date(),
  });

  return res.status(200).json({ ok: true });
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
