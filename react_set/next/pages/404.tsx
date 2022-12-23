import Router from "next/router";
// Mui
import Button from '@mui/material/Button';

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const boxStyle = {
    width: 'fit-content',
    height: 'fit-content',
    padding: '10px',
    borderRadius: '5px',
    display: 'grid',
    gridTemplateRows: '1fr auto'
}

export default function Custom404() {
    return (
        <div className="page_container" style={containerStyle}>
            <div className="box" style={boxStyle}>
                <div>
                    <h1 style={{ fontSize: '50px' }}>404 - Page Not Found</h1>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Button variant="contained" onClick={() => Router.push("/login")}>Go Home</Button>
                </div>
            </div>
        </div>
    )
}