import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import starFilled from '@iconify/icons-ant-design/star-filled';
// material
import { alpha, styled } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const RootStyle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
});

// ----------------------------------------------------------------------

ColorPreview.propTypes = {
  colors: PropTypes.array.isRequired,
  limit: PropTypes.number
};

export default function ColorPreview({ colors, limit = 3, ...other }) {
  const showRating = colors.slice(0, limit);

  return (
    <RootStyle component="span" {...other}>
      {showRating.map((color, index) => (
        <Icon icon={starFilled} width={24} height={24} color="#fff176" />
      ))}
    </RootStyle>
  );
}
