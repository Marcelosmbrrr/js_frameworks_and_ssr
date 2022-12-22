import '../styles/globals.css'
import type { AppProps } from 'next/app';
// Contexts Providers
import { AuthProvider } from '../context/auth';
import { SnackbarProvider } from 'notistack';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </SnackbarProvider>
  )
}
