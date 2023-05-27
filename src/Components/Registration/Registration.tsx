import React, { ReactNode, useState } from "react";
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

interface IProps {
    children: ReactNode;
    onClick: () => void;
}

export const Registration = ({ children, onClick }: IProps) => {
    const [email, setEmail] = useState('');
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        setIsButtonEnabled(inputValue.trim().length > 0);
    }

    const handleClose = () => {
        onClick();
        
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
                            <FontAwesomeIcon icon={faUser} style={{color: "rgba(31,27,46,.16)"}} className={styles.icon}/>                            
                            <input className={styles.login} 
                                placeholder="Через email или телефон"
                                value={email}
                                onChange={handleEmailInput}
                            />
                        </div>
                        <div className={styles.list}>
                            <button className={styles.btn} disabled={!isButtonEnabled}>Продолжить</button>
                            <div className={styles.privacy}>
                                Нажимая «Продолжить», я соглашаюсь
                                <br />
                                с
                                &nbsp;
                                <Link to='/privacy-policy' className={styles.text}>Политикой конфиденциальности</Link>
                                <br />
                                и
                                &nbsp;
                                <Link to='/user-agreement' className={styles.text}>Пользовательским соглашением</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
