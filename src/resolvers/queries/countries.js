import { CountriesCollection } from '../../services/mongodb';
import getTotalCount from '../../services/getTotalCount';

export default async ({ limit = 10, skip = 0, sort = {} }) => {
  const totalCount = await getTotalCount(CountriesCollection);

  const { field = 'name', direction = 'desc' } = sort;
  const countries = await CountriesCollection.find()
    .limit(limit)
    .skip(skip)
    .sort({ [field]: direction === 'desc' ? -1 : 1 });

  const hasPreviousPage = skip > 0;
  const hasNextPage = limit + skip < totalCount;

  return {
    totalCount,
    pageInfo: {
      hasNextPage,
      hasPreviousPage,
    },
    nodes: countries,
  };
};
