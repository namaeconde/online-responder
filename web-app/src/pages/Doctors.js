import { useFormik } from 'formik';
import { useState } from 'react';
// material
import { styled } from '@material-ui/core/styles';
import { Container, Stack, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import { DoctorSort, DoctorList, ProductFilterSidebar } from '../components/_dashboard/doctors';
//
import PRODUCTS from '../_mocks_/doctors';

// ----------------------------------------------------------------------
const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

export default function DoctorsBasedOnReviews() {
  const [openFilter, setOpenFilter] = useState(false);

  const formik = useFormik({
    initialValues: {
      gender: '',
      category: '',
      colors: '',
      priceRange: '',
      rating: ''
    },
    onSubmit: () => {
      setOpenFilter(false);
    }
  });

  const { resetForm, handleSubmit } = formik;

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const handleResetFilter = () => {
    handleSubmit();
    resetForm();
  };

  return (
    <RootStyle title="Find Doctors">
      <Container>
        <ContentStyle>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Find Doctors Nearby
          </Typography>

          <Stack sx={{ mb: 5 }}>
            <Stack direction="row" spacing={1}>
              <ProductFilterSidebar
                formik={formik}
                isOpenFilter={openFilter}
                onResetFilter={handleResetFilter}
                onOpenFilter={handleOpenFilter}
                onCloseFilter={handleCloseFilter}
              />
              <DoctorSort />
            </Stack>
          </Stack>

          <DoctorList doctors={PRODUCTS} />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
