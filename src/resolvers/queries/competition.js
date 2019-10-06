import { Competition } from '../../schema/mongoose';

export default ({ id }) => {
  return Competition.findById(id).populate('country');
};
