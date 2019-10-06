import { Team } from '../../schema/mongoose';

export default ({ id }) => {
  return Team.findById(id).populate('country');
};
