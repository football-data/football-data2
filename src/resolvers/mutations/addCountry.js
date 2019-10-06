import { Country } from '../../schema/mongoose';

export default async ({ input }) => {
  const { name, code } = input;

  return Country.create({ name, code });
};
