import * as React from 'react';
import styles from "./layout.module.css";

export function LayoutView() {
    return (
        <div className={styles.container}>
            <aside className={styles.aside}>
                <div className={styles.nav_icons}>
                    <ul>
                        <li>ICON</li>
                        <li>ICON</li>
                        <li>ICON</li>
                        <li>ICON</li>
                    </ul>
                </div>
                <div className={styles.nav_text}>
                    <ul>
                        <li>TEXT</li>
                        <li>TEXT</li>
                        <li>TEXT</li>
                        <li>TEXT</li>
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
                <div className={styles.section_top}>
                    SECTION TOP
                </div>
                <div className={styles.section_middle}>
                    SECTION MIDDLE
                </div>
            </section>
            <footer className={styles.footer}>
                FOOTER
            </footer>
        </div>

    )
}