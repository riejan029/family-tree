import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useState } from 'react';

const Form = () => {
    const [fullName, setFullName ] = useState<string>('')
    const [position, setPosition ] = useState<string>('')
    const [description, setDescription] = useState<string>('')
  return (
    <Grid container gap={2}>
        <Grid xs={12}>
            <TextField name='full-name' placeholder='Please Input' value={fullName} label='Full Name' onChange={(e) => setFullName(e.target.value)} />
        </Grid>
        <Grid xs={12}>
            <TextField name='position' placeholder='Please Input' value={position} label='Full Name' onChange={(e) => setPosition(e.target.value)} />
        </Grid>
        <Grid xs={12}>
            <TextareaAutosize name='position' placeholder='Please Input' value={description} onChange={(e) => setDescription(e.target.value)} />
        </Grid>
    </Grid>
  )
}

export default Form