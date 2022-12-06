import styles from "./content_container.module.css";
import { Router } from "../../router";

export function ContentContainer() {
    return (
        <div className={styles.content_container}>
            <Router />
        </div>
    )
}