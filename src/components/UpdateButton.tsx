import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import IconButton from '@mui/material/IconButton';
interface UpdateButtonProps {
    updateItem:() => void
}
const UpdateButton = (props:UpdateButtonProps) => {
    const {updateItem} = props
  return (
    <IconButton onClick={updateItem}>
        <ChangeCircleIcon color='primary'/>
    </IconButton>
  )
}

export default UpdateButton