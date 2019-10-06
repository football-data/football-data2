import { Competition } from '../../schema/mongoose';

export default async ({ input }) => {
  const { name, type, country } = input;

  return Competition.create({ name, type, country });
};
