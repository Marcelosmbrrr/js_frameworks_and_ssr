import * as React from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/login.module.css';
// MUI
import { TextField, Grid, Typography, Button, Divider } from '@mui/material';

interface form {
    email: string,
    password: string
}

interface formError {
    email: { error: boolean, message: string },
    password: { error: boolean, message: string }
}

const inputStyle = {
    minHeight: '80px'
}

const topModalStyle = {
    textAlign: 'center',
    mb: 2
}

export default function Login() {

    const [form, setForm] = React.useState<form>({ email: '', password: '' });
    const [formError, setFormError] = React.useState<formError>({ email: { error: false, message: '' }, password: { error: false, message: '' } });

    function handleLogin() {
        console.log('login');
    }

    function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Head>
                <title>Next | Login</title>
                <meta name="description" content="This is the login page" />
            </Head>

            <div className={styles.main}>
                <div className={`${styles.modal} ${styles.fade_out}`}>
                    <Grid container spacing={1}>

                        <Grid item xs={12} sx={topModalStyle}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="nextjs-icon" width='40' height='40' />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                onChange={handleFormChange}
                                value={form.email}
                                error={formError.email.error}
                                helperText={formError.email.message}
                                sx={inputStyle}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                onChange={handleFormChange}
                                value={form.password}
                                error={formError.password.error}
                                helperText={formError.password.message}
                                sx={inputStyle}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth onClick={handleLogin}>Login</Button>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </>
    )
}