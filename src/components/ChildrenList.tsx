import Stack from '@mui/material/Stack'
import type { ChildrenProps } from './types'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const ChildrenList = (props:ChildrenProps) => {
    const {familyChild, updateChild} = props
    if(!Array.isArray(familyChild)) return <></>
    if(familyChild.length === 0) return <div style={{display:'flex', justifyContent:'center', fontSize:'bold'}}>No Children</div>
    return (
        <Stack direction={'column'} py={3}>
            <Grid container>
            {familyChild.map((child, index) =>{
                return (
                        <Grid item xs={3} key={index}>
                        <Typography sx={{display:'flex', justifyContent:'center'}}>{child?.position || '-'}</Typography>
                        <ListItem sx={{display:'flex', justifyContent:'center'}}>
                            {child?.name}
                        </ListItem>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Button onClick={() => updateChild(child.id)}>Update Child</Button>
                        </div>
                        
                        </Grid>
                )
            })} 
            </Grid>
            <Button onClick={() => console.log('add child')}>Add Child</Button>
        </Stack>

    )
}

export default ChildrenList