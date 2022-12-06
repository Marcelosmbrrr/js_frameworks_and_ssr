import styles from "./dashboard.module.css";
// Custom
import { HorizontalWaves } from "../../Charts/HorizontalWaves";
import { HorizontalLines } from "../../Charts/HorizontalLines";

export function DashboardPage() {
    return (
        <>
            <div className={styles.container}>
                <div className={[styles.grid_item, styles.top].join(' ')}>
                    <div className={styles.card_name}>
                        <p>Chart Name</p>
                    </div>
                    <div>
                        <HorizontalWaves value={45} colors={["#82ca9d", "#121212", "#ffc658"]} />
                    </div>
                </div>

                <div className={[styles.grid_item, styles.top].join(' ')}>
                    <div className={styles.card_name}>
                        <p>Chart Name</p>
                    </div>
                    <div>
                        <HorizontalWaves value={20} colors={["#04AA6B", "#8884d8", "#82ca9d"]} />
                    </div>
                </div>

                <div className={[styles.grid_item, styles.top].join(' ')}>
                    <div className={styles.card_name}>
                        <p>Chart Name</p>
                    </div>
                    <div>
                        <HorizontalWaves value={-8} colors={["#8884d8", "#FF4154", "#ffc658"]} />
                    </div>
                </div>

                <div className={[styles.grid_item, styles.top].join(' ')}>
                    <div className={styles.card_name}>
                        <p>Chart Name</p>
                    </div>
                    <div>
                        <HorizontalWaves value={1} colors={["#8884d8", "#82ca9d", "#0A66C2"]} />
                    </div>
                </div>

                <div className={[styles.grid_item, styles.bottom].join(' ')}>
                    <div className={styles.card_name}>
                        <p>Chart Name</p>
                    </div>
                    <div>
                        <HorizontalLines />
                    </div>
                </div>
            </div>
        </>
    )
}