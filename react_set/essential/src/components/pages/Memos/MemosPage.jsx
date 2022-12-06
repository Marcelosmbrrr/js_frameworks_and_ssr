import * as React from 'react';
import styles from './memos.module.css';
// Mui
import Button from '@mui/material/Button';
// Childs
import { FirstCard } from './cards/FirstCard';
import { SecondCard } from './cards/SecondCard';

// A component always enters in the reconciliation algorithm when its states changes
// A parent component, by default, re-render with all its childs, being necessary or not
// So, the hooks memo, useMemo and userCallback exists for avoid unnecessary components re-renders 

// React.memo ===> For props memoization ===> Avoid unnecessary childreen re-render if props not changed
// React.useMemo ===> For variables (not states) memoization ===> Avoid unnecessary variable re-render if dependencies not changed
// React.useCallback ===> For functions process memoization ===> Avoid unnecessary function re-render if dependencies not changed

export function MemosPage() {

    // console.log('parent render');

    const [firstCounter, setFirstCounter] = React.useState(0);
    const [secondCounter, setSecondCounter] = React.useState(0);

    // This will re-render just when firstCounter changes
    const handleFirstCounter = React.useCallback(() => {
        const calculation = firstCounter + 2;
        setFirstCounter(calculation);
    }, [firstCounter]);

    // This will re-render just when secondCounter changes
    const handleSecondCounter = React.useCallback(() => {
        const calculation = secondCounter + 4;
        setSecondCounter(calculation);
    }, [secondCounter]);

    return (
        <div className={styles.container}>
            <div className={styles.cards_container}>
                <FirstCard firstCounter={firstCounter} handleFirstCounter={handleFirstCounter} />
                <SecondCard secondCounter={secondCounter} handleSecondCounter={handleSecondCounter} />
            </div>
        </div>
    )
}