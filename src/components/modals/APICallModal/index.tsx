import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { IModal } from '../../../types/modal';
import { useEffect, useState } from 'react';
import { useModal } from '../../../hooks/useModal';

export interface APICallModalProps extends IModal {
  postId: number;
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

const APICallModal = ({
  visible = false,
  onClose,
  postId,
}: APICallModalProps) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState<string>('');
  const { openAlert } = useModal();

  useEffect(() => {
    const fetchPost = async (postId: number) => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      try {
        if (res.status !== 200) {
          throw new Error(`status is ${res.status}`);
        }

        const json = await res.json();
        setTitle(json.title);
        setLoading(false);
      } catch {
        openAlert({ message: 'API Error' });
      }
    };

    fetchPost(postId);
  }, [postId]);

  return (
    <Modal open={visible} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {loading ? 'loading...' : title}
        </Typography>
        <Grid container justifyContent="flex-end">
          <Button onClick={onClose}>Close</Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default APICallModal;
