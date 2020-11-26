import { connectToDatabase } from 'src/utils/mongodb';

export default async function videoHandler(req, res) {
  const { body, method } = req;
  const { db } = await connectToDatabase();
  const collection = await db.collection('videos').find().toArray();

  switch (method) {
    case 'GET':
      res.status(200).json({ collection });
      break;
    case 'PUT':
      res.status(200).json({ body });
      break;
    default:
      res.setHeader('Allow', ['PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
