import PropTypes from 'prop-types';
// material
import { Grid } from '@material-ui/core';
import DoctorCard from './DoctorCard';

// ----------------------------------------------------------------------

DoctorList.propTypes = {
  doctors: PropTypes.array.isRequired
};

export default function DoctorList({ doctors, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {doctors.map((doctor) => (
        <Grid key={doctor.id} item xs={12} sm={6} md={3}>
          <DoctorCard doctor={doctor} />
        </Grid>
      ))}
    </Grid>
  );
}
