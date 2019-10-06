import { Team } from '../../schema/mongoose';

export default async ({ input }) => {
  const { name, shortName, code, country, stadium } = input;

  return Team.create({ name, shortName, code, country, stadium });
};
