import React from 'react';
import styles from './styles.module.css';

type PropsType = {
    avatar: string
    name: string
    enName: string
}


const PersonHeader: React.FC<PropsType> = ({avatar, name, enName}) => {
    return (
        <div className={styles.personHeader}>
            <div className={styles.header}>
                <img src={avatar} className={styles.avatar} alt=""/>
            </div>
            <div className={styles.info}>
                <h2 className={styles.name}>
                    {name}
                </h2>
                <span className={styles.alternate}>
                    {enName}
                </span>
            </div>
        </div>
    )
}

export default PersonHeader;