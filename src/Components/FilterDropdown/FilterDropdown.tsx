import styles from './styles.module.css';

export const FilterDropdown = () => {
    return (
        <div className={styles.dropdown}>
            <div className={styles.inner}>
                <div className={styles.content}>
                    <div className={styles.carousel}>
                        <div className={styles.viewport}>
                            <div className={styles.viewportInner}>
                                <div className={styles.list}>
                                    <div className={styles.item}>
                                        <div className={styles.itemSlick}>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.genres}>

                    </div>
                </div>
            </div>
        </div>
    )
}