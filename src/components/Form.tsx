import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useState, useEffect } from 'react';
import type { FamilyMemberList } from './types';

export type ModalType = 'submit' | 'update'
interface FormProps {
    open:boolean;
    confirmData:(data:FamilyMemberList) => void;
    updateData:FamilyMemberList;
    closeModal:() => void;
    modalType:ModalType
}

const Form = (props:FormProps) => {
    const {open, closeModal, confirmData, modalType, updateData} = props;
    const [fullName, setFullName ] = useState<string>('')
    const [position, setPosition ] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const finishedData = ():void => {
        confirmData({
            id:modalType === 'update' ? updateData.id : id(),
            name:fullName,
            description:description,
            position:position,
            familyChild:[]
        })
        setFullName('')
        setPosition('')
        setDescription('')
    }
    const id = () => Math.random()
    useEffect(() => {
        if(modalType === 'update'){
            setFullName(updateData.name)
            setPosition(updateData.position)
            setDescription(updateData.description)
        }
    }, [modalType, updateData.name,updateData.position, updateData.description ])
    
  return (
    <Dialog open={open} onClose={close}>
        <Grid container gap={2}>
            <Grid xs={12}>
                <TextField name='full-name' placeholder='Please Input' value={fullName} label='Full Name' onChange={(e) => setFullName(e.target.value)} />
            </Grid>
            <Grid xs={12}>
                <TextField name='position' placeholder='Please Input' value={position} label='Position' onChange={(e) => setPosition(e.target.value)} />
            </Grid>
            <Grid xs={12}>
                <TextareaAutosize name='position' placeholder='Please Input' value={description} onChange={(e) => setDescription(e.target.value)} />
            </Grid>
        </Grid>

        <Stack direction='row'>
            <Button onClick={closeModal}>Cancel</Button>
            <Button onClick={finishedData}>{modalType === 'submit'?'Submit' : 'Update' }</Button>
        </Stack>
    </Dialog>
    
  )
}

export default Form