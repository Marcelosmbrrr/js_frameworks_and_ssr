import * as React from 'react';
import styles from './todolist.module.css';
// Mui
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
// Custom
import { CreateItem } from './Modals/CreateItem';
import { UpdateItem } from './Modals/UpdateItem';
import { DeleteItem } from './Modals/DeleteItem';

export function TodoListPage() {

    const [list, setList] = React.useState([{}]);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [items, setItems] = React.useState([]);

    function handleSelectionCardToggle(item, event) {
        if (selectedItem) {
            setSelectedItem(null);
        } else {
            setSelectedItem(item);
        }
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.container_grid_item} ${styles.top}`}>
                <div className={styles.actions}>
                    <div>
                        {!selectedItem ?
                            <CreateItem setItems={setItems} items={items} />
                            :
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                        }
                    </div>
                    <div>
                        {selectedItem ?
                            <UpdateItem selectedItem={selectedItem} setSelectedItem={setSelectedItem} items={items} setItems={setItems} />
                            :
                            <IconButton>
                                <CreateIcon />
                            </IconButton>
                        }
                    </div>
                    <div>
                        {selectedItem ?
                            <DeleteItem selectedItem={selectedItem} setSelectedItem={setSelectedItem} items={items} setItems={setItems} />
                            :
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        }
                    </div>
                    <div>
                        | Total: {items.length}
                    </div>
                </div>
            </div>

            <div className={`${styles.container_grid_item} ${styles.bottom}`}>

                {items.length > 0 &&
                    items.map((item) =>
                        <div className={styles.card} key={item.id} onClick={(e) => handleSelectionCardToggle(item, e)}>
                            <div className={styles.card_name}>
                                <p>{item.title}</p>
                            </div>

                            <div className={styles.card_content}>
                                <p>{item.content}</p>
                            </div>

                            <div className={styles.card_footer}>
                                <p>@{item.creator.replace(" ", "_").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}</p>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}