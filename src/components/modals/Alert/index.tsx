import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { IModal } from '../../../types/modal';

export interface AlertProps extends IModal {
  title?: string;
  message?: string;
  onOk?: VoidFunction;
}

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

const Alert = ({
  visible = false,
  onClose,
  title,
  message,
  onOk,
}: AlertProps) => {
  const handleOk = () => {
    onOk?.();
    onClose?.();
  };
  return (
    <Modal open={visible} onClose={onClose}>
      <Box sx={style}>
        {title && (
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        )}
        {message && <Typography sx={{ mt: 2 }}>{message}</Typography>}
        <Grid container justifyContent="flex-end">
          <Button onClick={handleOk}>OK</Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default Alert;
