import * as React from 'react';
import Head from 'next/head';
import styles from './login.module.css';
// Types
import { formInterface, formErrorInterface, formValidationInterface } from '../../types';
// MUI
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Box, Typography, Container } from '@mui/material';
import { SnackbarProvider, useSnackbar } from 'notistack';
// Context
import { useAuth } from '../../context/auth';

const formPatterns: formValidationInterface = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Invalid email.'
    },
    password: {
        regex: /[0-9a-zA-Z]{5,}/,
        message: 'Must have at least 5 characters. '
    }
}

export default function Login() {

    const { signIn } = useAuth();
    const { enqueueSnackbar } = useSnackbar();

    const [form, setForm] = React.useState<formInterface>({ email: '', password: '' });
    const [formError, setFormError] = React.useState<formErrorInterface>({ email: { error: false, message: '' }, password: { error: false, message: '' } });
    const [loading, setLoading] = React.useState<boolean>(false);

    async function handleSignIn(e: React.SyntheticEvent) {
        e.preventDefault();

        if (handleFormValidation()) {
            setLoading(true);
            try {
                await signIn(form);
            } catch (error) {
                enqueueSnackbar(error.message, { variant: "error" });
            } finally {
                setLoading(false);
            }

        }
    }

    function handleFormValidation() {

        let formErrorClone: formErrorInterface = Object.assign(formError);
        let is_valid: boolean = true;
        for (let field in form) {
            if (!form[field].toString().match(formPatterns[field].regex)) {
                formErrorClone[field] = { error: true, message: formPatterns[field].message }
                is_valid = false;
            } else {
                formErrorClone[field] = { error: false, message: '' }
            }
        }

        setFormError({ ...formErrorClone });

        return is_valid;

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
                        <Box component="form" onSubmit={handleSignIn} noValidate sx={{ mt: 1 }}>
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
                                disabled={loading}
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