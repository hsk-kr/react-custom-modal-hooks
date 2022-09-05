import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { IModal } from '../../../types/modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

const GuideModal = ({ visible = false, onClose }: IModal) => {
  return (
    <Modal open={visible} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Guide
        </Typography>
        <Typography sx={{ mt: 2 }}>Some Text...</Typography>
        <Grid container justifyContent="flex-end">
          <Button onClick={onClose}>OK</Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default GuideModal;
