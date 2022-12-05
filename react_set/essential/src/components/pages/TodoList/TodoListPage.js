import * as React from 'react';
import styles from './todolist.module.css';
// Custom
import { CreateItem } from './Modals/CreateItem';
import { UpdateItem } from './Modals/UpdateItem';
import { DeleteItem } from './Modals/DeleteItem';

export function TodoListPage() {

    const [list, setList] = React.useState([{}]);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [items, setItems] = React.useState([]);

    function handleCardSelection(e) {
        console.log(e)
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.container_grid_item} ${styles.top}`}>
                <div className={styles.actions}>
                    <div>
                        <CreateItem setItems={setItems} items={items} />
                    </div>
                    <div>
                        <UpdateItem />
                    </div>
                    <div>
                        <DeleteItem />
                    </div>
                    <div>
                        | Total: {items.length}
                    </div>
                </div>
            </div>

            <div className={`${styles.container_grid_item} ${styles.bottom}`}>

                <div className={styles.card} onClick={handleCardSelection}>
                    <div className={styles.card_name}>
                        <p>{'Title'}</p>
                    </div>

                    <div className={styles.card_content}>
                        <p>{'Content'}</p>
                    </div>

                    <div className={styles.card_footer}>
                        <p>@{'creator'}</p>
                    </div>
                </div>

                {items.length > 0 &&
                    items.map((item) =>
                        <div className={styles.card} key={item.id}>
                            <div className={styles.card_name}>
                                <p>ID: {item.id} - {item.title}</p>
                            </div>

                            <div className={styles.card_content}>
                                <p>{item.content}</p>
                            </div>

                            <div className={styles.card_footer}>
                                <p>@{item.creator}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}