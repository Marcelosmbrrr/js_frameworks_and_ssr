import * as React from 'react';
import styles from './cards.module.css';
// Mui
import Button from '@mui/material/Button';

export const SecondCard = React.memo((props) => {

    // Execute every render
    console.log('second card render');

    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <p>Second Counter</p>
            </div>
            <div className={styles.screen}>
                <h1>{props.secondCounter}</h1>
            </div>
            <div className={styles.action_row}>
                <Button variant="contained" onClick={props.handleSecondCounter}>PLUS 4</Button>
            </div>
        </div>
    )
});