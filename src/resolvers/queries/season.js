import { Season } from '../../schema/mongoose';

export default ({ id }) => {
  return Season.findById(id).populate('country');
};
