import { Country } from '../../schema/mongoose';

export default ({ id }) => {
  return Country.findById(id);
};
