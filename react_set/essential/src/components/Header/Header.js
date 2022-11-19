import styles from "./header.module.css";
import LogoutIcon from '@mui/icons-material/Logout';

export function Header() {

    return (
        <>
            <div className={styles.header_icon}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="65px" />
            </div>
            <div className={styles.header_action}>
                <LogoutIcon />
            </div>
        </>
    )
}