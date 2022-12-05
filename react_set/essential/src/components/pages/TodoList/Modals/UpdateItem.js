import * as React from 'react';
import styles from './modals.module.css';
// Mui
import CreateIcon from '@mui/icons-material/Create';

const iconStyle = {
    '&:hover': {
        color: '#61DAFB'
    }
}

export function UpdateItem(props) {

    const [formData, setFormData] = React.useState({ title: '', content: '', by: 'you' });
    const [formError, setFormError] = React.useState({ title: { error: false, message: '' }, content: { error: false, message: '' } });
    const [open, setOpen] = React.useState(false);
    const modal = React.useRef();

    function openModal() {
        modal.current.classList.add(styles['open']);
    }

    function closeModal() {
        modal.current.classList.add(styles['close']);
    }

    function handleChangeInput(e) {
        setFormData({ ...formData, [e.target.name]: e.currentTarget.value });
    }

    return (
        <>
            <button onClick={openModal} className={styles.modal_button}>
                <CreateIcon sx={iconStyle} />
            </button>
            <div className={styles.modal} ref={modal} hidden>
                <div className={styles.formulary}>
                    <div className={styles.form_row}>
                        <input placeholder='Type the card title' value={formData.title} onChange={handleChangeInput} />
                        <div className={styles.input_alert} hidden={!formError.title.message}>
                            <p>{formError.title.message}</p>
                        </div>
                    </div>
                    <div className={styles.form_row}>
                        <input placeholder='Type the card content' value={formData.content} onChange={handleChangeInput} />
                        <div className={styles.input_alert} hidden={!formError.content.message}>
                            <p>{formError.content.message}</p>
                        </div>
                    </div>
                    <div className={styles.form_row}>
                        <input value={formData.by} readOnly />
                    </div>
                </div>

            </div>
        </>
    )
}