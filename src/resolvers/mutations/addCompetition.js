import { Competition } from '../../schema/mongoose';

export default async ({ input }) => {
  const { name, type, country } = input;

  const competition = Competition.create({ name, type, country });

  return competition;
};
