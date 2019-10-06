import { Stadium } from '../../schema/mongoose';

export default async ({ input }) => {
  const { name, popularName, city, country } = input;

  return Stadium.create({ name, popularName, city, country });
};
