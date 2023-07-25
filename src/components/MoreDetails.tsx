import LaunchIcon from '@mui/icons-material/Launch';
import IconButton from '@mui/material/IconButton';

interface MoreProps {
    moreItem:() => void;
}
const MoreDetails = (props:MoreProps) => {
    const {moreItem} = props
  return (
    <IconButton onClick={moreItem}>
        <LaunchIcon color='info'/>
    </IconButton>
  )
}

export default MoreDetails