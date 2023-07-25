
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';

interface DeleteProps {
    deleteItem:() => void;
}
const DeleteButton = (props:DeleteProps) => {
    const {deleteItem} = props
  return (
    <IconButton onClick={deleteItem}>
        <DeleteForeverIcon color='error'/>
    </IconButton>
  )
}

export default DeleteButton