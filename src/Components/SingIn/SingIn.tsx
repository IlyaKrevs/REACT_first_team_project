import { ReactNode, useEffect, useState } from "react";
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { schema } from "../../api/data/signInScheme";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ROUTE } from "../../router";
import { ErrorIcon } from "../../assets";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { SignInUserType } from "../../api/types/signInUserType";
import { useAppDispatch, useAppSelector } from "../../store";
import { getUser } from "../../store/selector/userSelector";
import { getToken } from "../../api/getToken";
import { signInAction } from "../../store/actions/signInAction";

interface IProps {
    children: ReactNode;
    onClose: () => void;
  }
  
  export const SignIn = ({ children, onClose }: IProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<SignInUserType>({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const handleClose = () => {
        onClose();
    }

    const [password, setPassword] = useState<string>('');
    const [tokenError, setTokenError] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const { isAuth } = useAppSelector(getUser);
    const dispatch = useAppDispatch();
    const showPasswordField = !!getValues().email;

    const onSubmit: SubmitHandler<SignInUserType> = (data) => {
        setIsLoading(true);
        getToken(data)
            .then(() => {
                dispatch(signInAction());
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setTokenError(error.data?.message || error.response?.data?.message);
            });
    };

    useEffect(() => {
        if (isAuth) {
            navigate(`${ROUTE.HOME}`, { replace: true });
        }
    }, [isAuth, navigate]);

    return (
        <div className={styles.registration}>
            <div className={styles.header}>Вход</div>
            <button className={styles.close} onClick={handleClose}>
                &times;
            </button>
            <div className={styles.separator} />
            <div className={styles.modal}>
                <div className={styles.content}>
                    {children}
                    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.item}>
                            <div className={styles.title}>Зарегистрируйтесь</div>
                            <div className={styles.subtitle}>чтобы поставить лайк</div>
                        </div>
                        <div className={styles.input}>
                            <FontAwesomeIcon icon={faUser} style={{ color: "rgba(31,27,46,.16)" }} className={styles.icon} />
                            <input
                                className={styles.login}
                                placeholder="Через email или телефон"
                                {...register('email')}
                                id="email"
                                autoComplete="current-email" 
                                aria-invalid={errors.email?.message ? "true" : "false"}
                            />
                        </div>
                        <div className={styles.input}>
                            <FontAwesomeIcon icon={faUser} style={{ color: "rgba(31,27,46,.16)" }} className={styles.icon} />
                        </div>
                        {showPasswordField && (
                            <div className={styles.input}>
                                <FontAwesomeIcon icon={faLock} style={{ color: "rgba(31,27,46,.16)" }} className={styles.icon} />
                                <input
                                    type="password"
                                    className={styles.login}
                                    placeholder="Пароль"
                                    {...register('password')}
                                    id="password"
                                    autoComplete="current-password" 
                                    aria-invalid={errors.password?.message ? "true" : "false"}
                                    onInput={({ currentTarget }) => {
                                        setPassword(currentTarget.value);
                                    }}
                                />
                            </div>
                        )}
                        <div className={styles.list}>
                            <button className={styles.btn} disabled={!!errors.password || isLoading || !getValues().email}>
                                Продолжить
                            </button>
                            {tokenError && (
                                <p className={styles.error}>
                                    <ErrorIcon />
                                    {tokenError}
                                </p>
                            )}
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
    );
};
