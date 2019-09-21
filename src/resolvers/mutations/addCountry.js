import { Country } from '../../schema/mongoose';

export default async ({ input }) => {
  const { name, code } = input;

  const country = Country.create({ name, code });

  return country;
};
