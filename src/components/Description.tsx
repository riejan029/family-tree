import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
interface DescriptionProps {
    open:boolean;
    closeModal:() => void;
    description: string
}
const Description = (props:DescriptionProps) => {
    const {open, closeModal, description} = props
  return (
    <Dialog open={open} onClose={closeModal}>
        <Stack direction='column' display={'flex'} alignItems={'center'} gap={3}>
            <Typography variant='h5' fontSize={'bold'}>Description</Typography>
            <Typography>{description}</Typography>
            <Button onClick={closeModal}>Close</Button>
        </Stack>

    </Dialog>
  )
}

export default Description