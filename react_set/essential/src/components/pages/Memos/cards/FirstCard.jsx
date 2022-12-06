import * as React from 'react';
import styles from './cards.module.css';
// Mui
import Button from '@mui/material/Button';

export const FirstCard = React.memo((props) => {

    // Execute every render
    console.log('first card render');

    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <p>First Counter</p>
            </div>
            <div className={styles.screen}>
                <h1>{props.firstCounter}</h1>
            </div>
            <div className={styles.action_row}>
                <Button variant="contained" onClick={props.handleFirstCounter}>PLUS 2</Button>
            </div>
        </div>
    )
});