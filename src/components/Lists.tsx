
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
import Form, { ModalType } from './Form';
import DeleteButton from './DeleteButton';
import UpdateButton from './UpdateButton';
import MoreDetails from './MoreDetails';
import Description from './Description';
interface UpdateChildrenArgs {
    parentKey:number;
    childKey:number;
}

const Lists = () => {
    const [familyList, setFamilyList] = useState<FamilyMemberList[]>(familyMembersList)
    const [familyObject, setFamilyObject] = useState<FamilyMemberList>(familyMembersList[0])
    const [openParent, setOpenParent] = useState<boolean>(false)
    const [openDesc, setOpenDesc] = useState<boolean>(false)
    const [desc, setDesc] = useState<string>('')
    const [modalType, setModalType] = useState<ModalType>('submit')
    const [addType, setAddType] = useState<string>('parent')
    const [parentIndex, setParentIndex] = useState<number>(0)
    const handleOpenModalParent = ():void => {
        setAddType('parent')
        setModalType('submit')
        setOpenParent(true)
    } 
    const handleOpenUpdateModalParent = (data:FamilyMemberList) => {
        setAddType('parent')
        setModalType('update')
        setFamilyObject(data)
        setOpenParent(true)
    }
    const handleCloseModalParent = ():void => setOpenParent(false)
    const addParent = (data:FamilyMemberList):void => {
        if(modalType === 'submit' && addType === 'parent') setFamilyList([...familyList, data])
        if(modalType === 'update' && addType === 'parent') setFamilyList(familyList.map((family) => family.id === data.id ? family = data : family))
        if(modalType === 'submit' && addType === 'child') {
            setFamilyList(familyList.map((family, index) => index === parentIndex ? family = {...family, familyChild:[...family.familyChild, data]} : family ))   
         }
        handleCloseModalParent()
    }
    const handleDeleteParent = (parentId:number):void => {
        setFamilyList(familyList.filter((list) => list.id !== parentId))
    }

    const updateChildren = (args:UpdateChildrenArgs):void => {
        const {parentKey, childKey} = args
        console.log(parentKey, childKey)
    }

    const openMoreItem = (desc:string):void => {
        setOpenDesc(true)
        setDesc(desc)
    }
    const closeMoreItem = ():void => {
        setOpenDesc(false)
    }

    const handleChildAdd = (index:number):void => {
        setParentIndex(index)
        setAddType('child')
        setModalType('submit')
        setOpenParent(true)
    }
  return (
    <Grid>
        <Stack direction={'column'}>
            <Typography sx={{display:'flex', justifyContent:'center'}}>List of Family Members</Typography>
        </Stack>
        <List>
            {familyList.length === 0
            ? (<div style={{display:'flex',justifyContent:'center'}}>No Record</div>) 
            : (<>
                {familyList.map((family, parentKey) => {
                    return (
                        <Stack key={parentKey} spacing={4}>
                            <Stack>
                                <Stack direction={'row'} display={'flex'} justifyContent={'center'} alignItems={'center'} spacing={2}>
                                    <Typography sx={{display:'flex', justifyContent:'center'}}>Parent {parentKey + 1}</Typography>
                                    <DeleteButton deleteItem={() => handleDeleteParent(family.id)} />
                                    <UpdateButton updateItem={() => handleOpenUpdateModalParent(family)} />
                                    <MoreDetails moreItem={() => openMoreItem(family.description)}  />
                                </Stack>
                                <ListItem sx={{display:'flex', justifyContent:'center'}}>
                                    {family?.name}
                                </ListItem>
                                <Typography sx={{display:'flex', justifyContent:'center'}}>Children</Typography>
                                <ChildrenList familyChild={family.familyChild} updateChild={(childKey) => updateChildren({parentKey:family.id, childKey:childKey})} addChild={() => handleChildAdd(parentKey)} />
                            </Stack>
                        </Stack>
                    
                    )
                })}
            </>)}
            
         </List> 
         <div style={{display:'flex', justifyContent:'center'}}>
         <Button onClick={handleOpenModalParent} variant='contained'>Add Parent</Button>
         </div>
         <Form open={openParent} closeModal={handleCloseModalParent} confirmData={addParent} modalType={modalType} updateData={familyObject} />
         <Description open={openDesc} description={desc} closeModal={closeMoreItem}  />
    </Grid>
  )
}

export default Lists