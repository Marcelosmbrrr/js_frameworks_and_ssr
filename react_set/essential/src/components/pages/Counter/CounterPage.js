import * as React from 'react';
import styles from './counter.module.css';

export function CounterPage() {

    const [acm, setAcm] = React.useState(0);
    const [typedNumber, setTypedNumber] = React.useState('');
    const [operator, setOperator] = React.useState('');
    const [rotate, setRotate] = React.useState(false);
    const modal = React.useRef();

    function handleReset() {
        if (rotate) {
            return '';
        }

        setAcm(0);
        setTypedNumber('');
        setOperator('');
        modal.current.classList.add(styles['rotate_animation']);
        setTimeout(() => {
            modal.current.classList.remove(styles['rotate_animation']);
            setRotate(false);
        }, 1000)
    }

    function handleNumberClick(e) {
        if (operator === '') {
            alert('Choose operation first!');
            return '';
        }

        setTypedNumber((prev) => prev + e.target.firstChild.nodeValue)
    }

    function handleOperatorClick(e) {
        setOperator(e.target.firstChild.nodeValue);
    }

    function handleEnter() {

        if(operator === ''){
            alert('Theres nothing to calculate.');
            return '';
        }

        if (operator === '+') {
            setAcm((prev) => Number(prev) + Number(typedNumber));
        } else if (operator === '-') {
            setAcm((prev) => Number(prev) - Number(typedNumber));
        } else if (operator === '/') {
            setAcm((prev) => Number(prev) / Number(typedNumber));
        } else if (operator === 'x') {
            setAcm((prev) => Number(prev) * Number(typedNumber));
        } else if (operator === '^') {
            setAcm((prev) => Number(prev) ^ Number(typedNumber));
        }

        setOperator('');
        setTypedNumber('');
    }

    return (
        <div className={styles.container}>
            <div className={styles.modal} ref={modal}>
                <div className={styles.top}>
                    <input placeholder='Type a number on keyboard' type="text" readOnly value={`${acm} ${operator} ${typedNumber}`} />
                </div>
                <div className={styles.keyboard}>
                    <div className={`${styles.key} ${styles.number_key}`} onClick={handleNumberClick}>
                        1
                    </div>

                    <div className={`${styles.key} ${styles.number_key}`} onClick={handleNumberClick}>
                        2
                    </div>

                    <div className={`${styles.key} ${styles.number_key}`} onClick={handleNumberClick}>
                        3
                    </div>

                    <div className={`${styles.key} ${styles.number_key}`} onClick={handleNumberClick}>
                        4
                    </div>

                    <div className={`${styles.key} ${styles.number_key}`} onClick={handleNumberClick}>
                        5
                    </div>

                    <div className={`${styles.key} ${styles.number_key}`} onClick={handleNumberClick}>
                        6
                    </div>

                    <div className={`${styles.key} ${styles.number_key}`} onClick={handleNumberClick}>
                        7
                    </div>

                    <div className={`${styles.key} ${styles.number_key}`} onClick={handleNumberClick}>
                        8
                    </div>

                    <div className={`${styles.key} ${styles.number_key}`} onClick={handleNumberClick}>
                        9
                    </div>

                    <div className={`${styles.key} ${styles.operator_key}`} onClick={handleOperatorClick}>
                        +
                    </div>

                    <div className={`${styles.key} ${styles.operator_key}`} onClick={handleOperatorClick}>
                        -
                    </div>

                    <div className={`${styles.key} ${styles.operator_key}`} onClick={handleOperatorClick}>
                        /
                    </div>

                    <div className={`${styles.key} ${styles.operator_key}`} onClick={handleOperatorClick}>
                        x
                    </div>

                    <div className={`${styles.key} ${styles.operator_key}`} onClick={handleOperatorClick}>
                        ^
                    </div>

                    <div className={`${styles.key} ${styles.execute_key}`} onClick={handleEnter}>
                        ENTER
                    </div>

                    <div className={`${styles.key} ${styles.reset_key}`} onClick={handleReset}>
                        RESET
                    </div>
                </div>
                <div className={styles.screen}>
                    <h1>{acm}</h1>
                </div>
            </div>
        </div>
    )
}