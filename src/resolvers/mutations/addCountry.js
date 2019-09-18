import { CountriesCollection } from '../../services/mongodb';

export default async ({ input }) => {
  const { name, code } = input;

  const country = CountriesCollection.create({ name, code });

  return country;
};
