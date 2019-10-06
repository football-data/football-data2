import { Competition } from '../../schema/mongoose';

export default () => {
  return Competition.find().populate('country');
};
