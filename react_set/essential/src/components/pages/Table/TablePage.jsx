import * as React from 'react';
import styles from "./table.module.css";
// Mui
import { Box, IconButton, LinearProgress } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 300,
        editable: true,
    },
    {
        field: 'username',
        headerName: 'Username',
        width: 200,
        editable: true,
    },
    {
        field: 'email',
        headerName: 'Email',
        width: 300,
        editable: true,
    },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 110,
        renderCell: (data) => {

            function handleUpdate(user) {
                console.log(user)
            }

            function handleDelete(user) {
                console.log(user)
            }

            return (
                <>
                    <IconButton onClick={() => handleUpdate(data.row)}>
                        <CreateIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(data.row)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            )
        }
    }
];

export function TablePage() {

    const [loading, setLoading] = React.useState(true);
    const [records, setRecords] = React.useState([]);
    const [limit, setLimit] = React.useState(10);

    // ComponentDidMount
    React.useEffect(() => {

        let is_unmounting = false;

        if (!is_unmounting) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    setRecords(json);
                    setLoading(false);
                })
        }

        // Clean up function executed when component unmount
        return () => {
            is_unmounting = true;
        }

    }, [])

    return (

        <div className={styles.container}>
            <Box sx={{ height: 400, width: '100%', minWidth: '400px' }}>
                <DataGrid
                    rows={records}
                    columns={columns}
                    loading={loading}
                    pageSize={limit}
                    onPageSizeChange={(newLimit) => setLimit(newLimit)}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }}
                    sx={{
                        "&.MuiDataGrid-root .MuiDataGrid-cell, .MuiDataGrid-columnHeader:focus-within": {
                            outline: "none !important",
                        },
                        '& .super-app-theme--header': {
                            color: '#222'
                        },
                        '& .MuiDataGrid-columnHeaders': {
                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
                        }
                    }}
                />
            </Box>
        </div>



    )
}