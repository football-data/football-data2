import { Team } from '../../schema/mongoose';

export default async ({ input }) => {
  const { name, shortName, code, country, stadium } = input;

  const team = Team.create({ name, shortName, code, country, stadium });

  return team;
};
