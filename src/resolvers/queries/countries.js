import { Country } from '../../schema/mongoose';

export default async () => {
  const countries = await Country.find();

  return countries;
};
