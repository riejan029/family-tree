
import Grid from '@mui/material/Grid';
import { useState } from 'react'
import { familyMembersList } from './utils';
import type { FamilyMemberList } from './types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ChildrenList from './ChildrenList';
interface AddChildrenArgs {
    parentKey:number;
    childKey:number;
}
const Lists = () => {
    const [familyList, setFamilyList] = useState<FamilyMemberList[]>(familyMembersList)
    const addChildren = (args:AddChildrenArgs):void => {
        const {parentKey, childKey} = args
        console.log(parentKey, childKey)
    }
  return (
    <Grid >
        <Stack direction={'column'}>
            <Typography sx={{display:'flex', justifyContent:'center'}}>List of Family Members</Typography>
        </Stack>
        <List>
            {familyList.map((family, parentKey) => {
                return (
                    <Stack key={parentKey}>
                        <Stack>
                            <Typography sx={{display:'flex', justifyContent:'center'}}>Parent</Typography>
                            <ListItem sx={{display:'flex', justifyContent:'center'}}>
                                {family.name}
                            </ListItem>
                            <Typography sx={{display:'flex', justifyContent:'center'}}>Children</Typography>
                            <ChildrenList familyChild={family.familyChild} updateChild={(childKey) => addChildren({parentKey:family.id, childKey:childKey})} />
                        </Stack>
                    </Stack>
                   
                )
            })}
         </List> 
    </Grid>
  )
}

export default Lists