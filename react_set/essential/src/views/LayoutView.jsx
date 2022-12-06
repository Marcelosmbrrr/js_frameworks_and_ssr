import * as React from 'react';
import styles from "./layout.module.css";
// Components
import { Menu } from '../components/Menu/Menu';
import { Header } from '../components/Header/Header';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';


export function LayoutView() {
    return (
        <div className={styles.container}>
            <aside className={styles.aside}>
                <Menu />
            </aside>
            <header className={styles.header}>
                <Header />
            </header>
            <section className={styles.section}>
                <ContentContainer />
            </section>
            <footer className={styles.footer}>
            </footer>
        </div>

    )
}