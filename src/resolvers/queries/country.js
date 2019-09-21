import { Country } from '../../schema/mongoose';

export default async ({ id }) => {
  const country = await Country.findById(id);

  return country;
};
