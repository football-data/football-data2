import { Season } from '../../schema/mongoose';

export default () => {
  return Season.find().populate('country');
};
