import { connectDb } from '../services/mongodb';

export default async (resolve, root, args, context, info) => {
  await connectDb();
  const result = await resolve(root, args, context, info);
  return result;
};
