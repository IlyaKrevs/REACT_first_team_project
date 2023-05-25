import { ReactNode, useState } from "react";
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

interface IProps {
    children: ReactNode;
    onClose: () => void;
}

export const Registration = ({ children, onClose }: IProps) => {
    const [close, setClose] = useState(false);
    const handleClose = () => {
        setClose(true);
        onClose();

        if (close) {
            return null;
        }
    }

    return ( 
        <div className={styles.registration}>
            <div className={styles.header}>Вход или регистрация</div>
            <button className={styles.close} onClick={handleClose}>
                &times;
            </button>
            <div className={styles.separator} />
            <div className={styles.modal}>
                <div className={styles.content}>
                    {children}
                    <form className={styles.wrapper}>
                        <div className={styles.item}>
                            <div className={styles.title}>Войдите или зарегистрируйтесь</div>
                            <div className={styles.subtitle}>чтобы поставить лайк</div>
                        </div>
                        <div className={styles.input}>
                         <FontAwesomeIcon icon={faUser} style={{color: "#1f1b2e",}} className={styles.icon}/>                            
                         <input className={styles.login} placeholder="Через email или телефон"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
