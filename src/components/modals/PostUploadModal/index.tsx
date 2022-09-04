import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { IModal } from '../../../types/modal';

export interface PostUploadModalProps extends IModal {
  onSubmit?: (title: string, content: string) => void;
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

const PostUploadModal = ({
  visible = false,
  onClose,
  onSubmit,
}: PostUploadModalProps) => {
  const { register, handleSubmit: handleFormSubmit } = useForm<{
    title: string;
    content: string;
  }>();

  const handleSubmit: Parameters<typeof handleFormSubmit>[0] = (values) => {
    onSubmit?.(values.title, values.content);
    onClose?.();
  };

  return (
    <Modal open={visible} onClose={onClose}>
      <Box sx={style}>
        <TextField
          {...register('title', { required: true })}
          sx={{ width: '100%', marginBottom: 2 }}
          label="Title"
          placeholder="Enter the title"
        />
        <TextField
          {...register('content', { required: true })}
          sx={{ width: '100%', marginBottom: 2 }}
          label="Content"
          multiline
          rows={4}
          placeholder="Enter the content"
        />
        <Grid container justifyContent="flex-end">
          <Button
            variant="contained"
            color="success"
            onClick={handleFormSubmit(handleSubmit)}
          >
            Submit
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default PostUploadModal;
