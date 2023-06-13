import { ReactNode, useState } from "react";
import styles from './styles.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { schema } from "../../api/data/registrationScheme";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { ROUTE } from "../../router";
import { ErrorIcon } from "../../assets";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { RegisterUserType } from "../../api/types/registerUserType";
import { userRegistration } from "../../api/UserRegistration";

interface IProps {
  children: ReactNode;
  onClick: () => void;
}

export const Registration = ({ children, onClick }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<RegisterUserType>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleClose = () => {
    onClick();
  }

  const [password, setPassword] = useState<string>('');
  const [registrationError, setRegistrationError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterUserType> = (data) => {
    setIsLoading(true);
    userRegistration(data)
      .then(() => {
        navigate(ROUTE.HOME);
        setIsLoading(false);
      })
      .catch((error) => {
        setRegistrationError(error.response.data.message);
        setIsLoading(false);
      });
  }

  const showPasswordField = !!getValues().email;

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
          <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.item}>
              <div className={styles.title}>Войдите или зарегистрируйтесь</div>
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
              <input
                className={styles.login}
                placeholder="Ваше имя"
                {...register('profileName')}
                id="profileName"
                autoComplete="current-profileName" 
                aria-invalid={errors.profileName?.message ? "true" : "false"}
              />
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
              {registrationError && (
                <p className={styles.error}>
                  <ErrorIcon />
                  {registrationError}
                </p>
              )}

              <div className={styles.privacy}>
                <p className={styles.enter}>
                  Уже есть аккаунт?  <Link to={generatePath(`${ROUTE.HOME + ROUTE.SIGN_IN}`)}>Войти</Link>
                </p>
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
