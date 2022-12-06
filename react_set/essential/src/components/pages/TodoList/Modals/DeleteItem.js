import * as React from 'react';
import styles from './modals.module.css';
// Mui
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteItem = React.memo((props) => {

    const [open, setOpen] = React.useState(false);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleSave() {

        let items_without_the_deleted = props.items.filter((item) => item.id !== props.selectedItem.id);

        props.setItems([...items_without_the_deleted]);
        props.setSelectedItem(null);
        handleClose();

    }

    return (
        <>
            <IconButton onClick={handleOpen} className={styles.modal_button}>
                <DeleteIcon style={{ color: '#61DAFB' }} />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>Delete Card</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Be careful: this action is irreversible.
                    </DialogContentText>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave} color="error" variant="contained">Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    )
});