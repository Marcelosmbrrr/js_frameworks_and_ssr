import * as React from 'react';
// CSS
import styles from './modals.module.css';
// Mui
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const initialFormData = { id: '', title: '', content: '', creator: '' }
const initialError = { title: { error: false, message: '' }, content: { error: false, message: '' }, creator: { error: false, message: '' } };

export function CreateItem(props) {

    const [formData, setFormData] = React.useState(initialFormData);
    const [error, setError] = React.useState(initialError);
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
        setFormData(initialFormData);
        setError(initialError);
    }

    function handleSave() {

        let errorClone = Object.assign(error);
        let errorCheck = false;

        for (let key in formData) {
            if (key !== 'id' && (formData[key].length === 0 || formData[key].length < 3)) {
                errorCheck = true;
                errorClone[key] = { error: true, message: 'Must have at least 3 letters.' };
            }
        }

        if (errorCheck) {
            setError({ ...errorClone });
            return ''
        }

        const newCard = Object.assign(formData, { id: props.items.length + 1 });

        props.setItems((prev) => [...prev, newCard]);
        handleClose();

    }

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.currentTarget.value });
    }

    return (
        <>
            <IconButton onClick={handleOpen} className={styles.modal_button}>
                <AddIcon style={{ color: '#61DAFB' }} />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Create Card</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe a new card, please, enter the title, content and you username.
                    </DialogContentText>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="title"
                                name="title"
                                label="Title"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={formData.title}
                                onChange={handleChange}
                                error={error.title.error}
                                helperText={error.title.message}
                                inputProps={{ maxLength: 15 }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="content"
                                name="content"
                                label="Content"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={formData.content}
                                onChange={handleChange}
                                error={error.content.error}
                                helperText={error.content.message}
                                inputProps={{ maxLength: 50 }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="creator"
                                name="creator"
                                label="Creator"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={formData.creator}
                                onChange={handleChange}
                                error={error.creator.error}
                                helperText={error.creator.message}
                                inputProps={{ maxLength: 15 }}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave} variant="contained">Save</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
