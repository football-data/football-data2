import { Competition } from '../../schema/mongoose';

export default async () => {
  const competitions = await Competition.find().populate('country');

  return competitions;
};
