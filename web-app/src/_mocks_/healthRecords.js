import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const healthRecords = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  date: '2021-05-10',
  avatarUrl: mockImgAvatar(index + 1),
  name: `Dr. ${faker.name.findName()}`,
  complaint: 'Chest pains, Fever, Dry Cough',
  diagnosis: 'Flu',
  company: faker.company.companyName(),
  isVerified: faker.datatype.boolean(),
  status: sample(['ongoing', 'treated']),
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer'
  ])
}));

export default healthRecords;
