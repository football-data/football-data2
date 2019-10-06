import { Season } from '../../schema/mongoose';

export default async ({ input }) => {
  const { season, start, end, competition, teams } = input;

  return Season.create({ season, start, end, competition, teams });
};
