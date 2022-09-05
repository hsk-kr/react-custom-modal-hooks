import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useModal } from '../../hooks/useModal';

function Examples() {
  const {
    openAlert,
    openConfirm,
    openGuideModal,
    openPostUploadModal,
    openAPICallModal,
  } = useModal();

  const openAlertExample = () => {
    openAlert({
      title: 'Alert Example',
      message: 'Hello Dev.to!',
    });
  };

  const openConfirmExample = () => {
    openConfirm({
      title: 'Confirm Example',
      message: 'Do you like this post?',
      cancelText: 'NO',
      confirmText: 'YES',
      onCancel: () => openAlert({ message: 'clicked NO' }),
      onConfirm: () => openAlert({ message: 'clicked YES' }),
    });
  };

  const openGuideModalExample = () => {
    openGuideModal();
  };

  const openPostUploadModalExample = () => {
    openPostUploadModal({
      onSubmit: (title, content) => {
        openAlert({
          title: 'Form Data',
          message: `title: ${title} content: ${content}`,
        });
      },
    });
  };

  const openAPICallModalExample = () => {
    openAPICallModal({
      postId: 1,
    });
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: 12 }}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Button variant="contained" onClick={openAlertExample}>
            Alert
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={openConfirmExample}
          >
            Confirm
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="info"
            onClick={openGuideModalExample}
          >
            Modal Without Props
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="success"
            onClick={openPostUploadModalExample}
          >
            Upload a post
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="error"
            onClick={openAPICallModalExample}
          >
            JSON Placeholder Post API
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Examples;
