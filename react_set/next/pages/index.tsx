import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/login.module.css';
// Types
import { form, formError, formValidation } from '../types';
// MUI
import { TextField, Grid, Button } from '@mui/material';

const inputStyle = {
    minHeight: '80px'
}

const topModalStyle = {
    textAlign: 'center',
    mb: 2
}

const formPatterns: formValidation = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid email.'
    },
    password: {
        regex: /[0-9a-zA-Z]{6,}/,
        message: 'Must have at least 6 characters. '
    }
}

export default function Login() {

    const [form, setForm] = React.useState<form>({ email: '', password: '' });
    const [formError, setFormError] = React.useState<formError>({ email: { error: false, message: '' }, password: { error: false, message: '' } });
    const [loading, setLoading] = React.useState<boolean>(false);

    function handleLogin() {

        let formErrorClone = Object.assign(formError);
        for (let field in form) {
            if (!form[field].toString().match(formPatterns[field].regex)) {
                formErrorClone[field] = { error: true, message: formPatterns[field].message }
            } else {
                formErrorClone[field] = { error: false, message: '' }
            }
        }

        setFormError({ ...formErrorClone });

        alert('Login!');
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
                                name="email"
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
                                name="password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                onChange={handleFormChange}
                                value={form.password}
                                error={formError.password.error}
                                helperText={formError.password.message}
                                sx={inputStyle}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth onClick={handleLogin} disabled={loading}>{loading ? 'Loading...' : 'Login'}</Button>
                        </Grid>

                    </Grid>
                </div>
            </div>
        </>
    )
}