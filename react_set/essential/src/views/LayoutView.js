import * as React from 'react';
import styles from "./layout.module.css";

export function LayoutView() {
    return (
        <div className={styles.container}>
            <aside className={styles.aside}>
                aside
            </aside>
            <header className={styles.header}>
                header
            </header>
            <section className={styles.section}>
                section
            </section>
            <footer className={styles.footer}>
                footer
            </footer>
        </div>

    )
}