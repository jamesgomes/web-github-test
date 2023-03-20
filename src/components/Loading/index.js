import React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Loading = () => {
  return (
    <Stack sx={{ width: '100%', color: 'grey.500', paddingTop: "5%" }} spacing={2}>
      <LinearProgress color="primary" />
      <span>Carregando dados...</span>
    </Stack>
  );
};

export default Loading;
