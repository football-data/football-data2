import { Team } from '../../schema/mongoose';

export default () => {
  return Team.find().populate('country');
};
