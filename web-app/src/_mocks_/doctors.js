import faker from 'faker';
import { sample } from 'lodash';
// utils
// ----------------------------------------------------------------------

const DOCTOR_NAME = [
  'Dr. John Doe',
  'Dr. Jane Doe',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini',
  'Dr. Apolinario Mabini'
];
const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/static/mock-images/doctors/doctor_${setIndex + 1}.jpg`,
    name: DOCTOR_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    ratings: Math.random() * (6 - 0) + 0,
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['popular', 'new', '', ''])
  };
});

export default products;
