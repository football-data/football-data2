import { Competition } from '../../schema/mongoose';

export default async ({ id }) => {
  const competition = await Competition.findById(id).populate('country');

  return competition;
};
