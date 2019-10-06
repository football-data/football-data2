import { Stadium } from '../../schema/mongoose';

export default () => {
  return Stadium.find().populate('country');
};
