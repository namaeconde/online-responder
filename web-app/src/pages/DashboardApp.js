// material
import { Box, Grid, Container, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppTotalReviews,
  AppHospitalAdmissions,
  AppMedicalCheckups,
  AppHealthTips,
  AppTotalRewards,
  AppBookingTimeline,
  AppMedicalConsultations
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppTotalRewards />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTotalReviews />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppMedicalCheckups />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppHospitalAdmissions />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppMedicalConsultations />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppHealthTips />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppBookingTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
