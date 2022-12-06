import * as React from 'react';
import styles from './modals.module.css';
// Mui
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Button } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const initialFormData = { id: '', title: '', content: '', creator: '' }
const initialError = { title: { error: false, message: '' }, content: { error: false, message: '' }, creator: { error: false, message: '' } };

export function UpdateItem(props) {

    const [formData, setFormData] = React.useState(initialFormData);
    const [error, setError] = React.useState(initialError);
    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(true);
        setFormData({ id: props.selectedItem.id, title: props.selectedItem.title, content: props.selectedItem.content, creator: props.selectedItem.creator });
    }

    function handleClose() {
        setOpen(false);
        setFormData(initialFormData);
        setError(initialError);
    }

    function handleSave() {

        let itemsUpdated = props.items.map((item, index) => {
            // Set formData to items[index]
            if (item.id === formData.id) {
                return formData;
            } else {
                return item;
            }
        });

        props.setItems([...itemsUpdated]);
        props.setSelectedItem(null);
        handleClose();

    }

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.currentTarget.value });
    }

    return (
        <>
            <IconButton onClick={handleOpen} className={styles.modal_button}>
                <CreateIcon style={{ color: '#61DAFB' }} />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Update Card</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This is a modal to updated the data of a already existing card.
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
    )
}