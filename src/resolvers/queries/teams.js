import { Team } from '../../schema/mongoose';

export default async () => {
  const teams = await Team.find().populate('country');

  return teams;
};
