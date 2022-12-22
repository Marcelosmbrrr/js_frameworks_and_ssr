import * as React from 'react';
import Head from 'next/head';
import styles from '../styles/login.module.css';
// Types
import { form, formError, formValidation } from '../types';
// MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const inputStyle = {
    minHeight: '30px'
}

const formRowStyle = {
    width: '100%'
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

        let formErrorClone: formError = Object.assign(formError);
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

                <Container component="main" maxWidth="xs" sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', borderRadius: 2 }} className={styles.fade_out}>
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box mb={2}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="50" height="50" style={{ marginRight: 10 }} />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="50" height="50" />
                        </Box>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleFormChange}
                                value={form.email}
                                error={formError.email.error}
                                helperText={formError.email.message}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={handleFormChange}
                                value={form.password}
                                error={formError.password.error}
                                helperText={formError.password.message}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </div>
        </>
    )
}