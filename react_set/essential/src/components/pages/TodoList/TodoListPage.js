import * as React from 'react';
import styles from './todolist.module.css';
// Mui
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

export function TodoListPage() {

    const [list, setList] = React.useState([{}]);
    const [selectedItem, setSelectedItem] = React.useState(null);

    return (
        <div className={styles.container}>
            <div className={`${styles.container_grid_item} ${styles.top}`}>
                <div className={styles.actions}>
                    <div>
                        <button><AddIcon /></button>
                    </div>
                    <div>
                        <button><CreateIcon /></button>
                    </div>
                    <div>
                        <button><DeleteIcon /></button>
                    </div>
                </div>
            </div>

            <div className={`${styles.container_grid_item} ${styles.bottom}`}>

                {/* Todo List*/}

                {/*
                <div className={styles.card}>
                    <div className={styles.card_name}>
                        <p>Title</p>
                    </div>

                    <div className={styles.card_content}>
                        <p>Content</p>
                    </div>

                    <div className={styles.card_footer}>
                        <p>Footer</p>
                    </div>
                </div>
                */}

            </div>
        </div>
    )
}