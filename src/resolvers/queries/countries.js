import { Country } from '../../schema/mongoose';

export default () => {
  return Country.find();
};
