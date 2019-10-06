import { Stadium } from '../../schema/mongoose';

export default ({ id }) => {
  return Stadium.findById(id).populate('country');
};
