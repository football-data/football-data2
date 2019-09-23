import { Team } from '../../schema/mongoose';

export default async ({ id }) => {
  const team = await Team.findById(id).populate('country');

  return team;
};
