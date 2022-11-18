import * as React from 'react';
import styles from "./layout.module.css";

export function LayoutView() {
    return (
        <div className={styles.container}>
            <aside className={styles.aside}>
                <div className={styles.nav_desktop}>
                    <ul>
                        <li>ICON TEXT</li>
                        <li>ICON TEXT</li>
                        <li>ICON TEXT</li>
                        <li>ICON TEXT</li>
                    </ul>
                </div>
                <div className={styles.nav_mobile}>
                    <ul>
                        <li>ICON</li>
                        <li>ICON</li>
                        <li>ICON</li>
                        <li>ICON</li>
                    </ul>
                </div>
            </aside>
            <header className={styles.header}>
                <div className={styles.header_left}>
                    HEADER LEFT
                </div>
                <div className={styles.header_right}>
                    HEADER RIGHT
                </div>
            </header>
            <section className={styles.section}>
                <div className={styles.section_container}>
                    SECTION CONTAINER
                </div>
            </section>
            <footer className={styles.footer}>
            </footer>
        </div>

    )
}